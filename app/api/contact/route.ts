import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000
const RATE_LIMIT_MAX = 5
const MAX_BODY_BYTES = 32 * 1024 // 32KB — more than enough for a contact form, blocks oversized payloads

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now()
  const record = rateLimit.get(ip)

  // Clean up old entries periodically
  if (rateLimit.size > 10000) {
    for (const [key, value] of rateLimit.entries()) {
      if (value.resetTime < now) {
        rateLimit.delete(key)
      }
    }
  }

  if (!record || record.resetTime < now) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetIn: RATE_LIMIT_WINDOW }
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now }
  }

  record.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count, resetIn: record.resetTime - now }
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
  // Honeypot field — bots often fill any `website` input, legitimate users can't see it
  website?: string
}

function genericError() {
  return NextResponse.json(
    { error: 'Er is een fout opgetreden. Probeer het later opnieuw.' },
    { status: 500 }
  )
}

function logError(context: string, err: unknown) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(`[contact-api:${context}]`, err)
  }
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone format (Dutch)
function isValidPhone(phone: string): boolean {
  if (!phone) return true // Optional field
  const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/
  return phoneRegex.test(phone.replace(/[\s\-]/g, ''))
}

// Sanitize input to prevent injection
function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .trim()
}

const ALLOWED_ORIGIN_HOSTS = new Set([
  'startbeheer.nl',
  'www.startbeheer.nl',
  'localhost',
  '127.0.0.1',
])

function isAllowedOrigin(url: string | null): boolean {
  if (!url) return false
  try {
    return ALLOWED_ORIGIN_HOSTS.has(new URL(url).hostname)
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    if (request.method !== 'POST') {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
    }

    // CSRF-protection via Origin/Referer check (same-site only)
    const origin = request.headers.get('origin')
    const referer = request.headers.get('referer')
    if (!isAllowedOrigin(origin) && !isAllowedOrigin(referer)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported media type' }, { status: 415 })
    }

    const contentLength = parseInt(request.headers.get('content-length') || '0', 10)
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Bericht is te groot' }, { status: 413 })
    }

    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'

    const rateLimitResult = checkRateLimit(ip)
    if (!rateLimitResult.allowed) {
      const retryAfter = Math.ceil(rateLimitResult.resetIn / 1000)
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het later opnieuw.' },
        {
          status: 429,
          headers: {
            'Retry-After': retryAfter.toString(),
            'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil((Date.now() + rateLimitResult.resetIn) / 1000).toString(),
          },
        }
      )
    }

    let body: ContactFormData
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Ongeldige aanvraag' }, { status: 400 })
    }

    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ error: 'Ongeldige aanvraag' }, { status: 400 })
    }

    // Honeypot — bots fill hidden `website` field, humans can't see it
    if (body.website && body.website.trim().length > 0) {
      // Respond 200 to not tip off bots, but don't send mail
      return NextResponse.json({ success: true }, { status: 200 })
    }

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      )
    }

    if (typeof body.name !== 'string' || typeof body.email !== 'string' || typeof body.message !== 'string') {
      return NextResponse.json({ error: 'Ongeldige waarden' }, { status: 400 })
    }

    if (body.name.length > 200 || body.email.length > 200) {
      return NextResponse.json({ error: 'Naam of e-mail is te lang' }, { status: 400 })
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 })
    }

    if (body.phone && !isValidPhone(body.phone)) {
      return NextResponse.json({ error: 'Ongeldig telefoonnummer' }, { status: 400 })
    }

    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Bericht moet minimaal 10 tekens bevatten' },
        { status: 400 }
      )
    }

    if (body.message.length > 5000) {
      return NextResponse.json(
        { error: 'Bericht mag maximaal 5000 tekens bevatten' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: body.phone ? sanitize(body.phone) : '',
      company: body.company ? sanitize(body.company) : '',
      service: body.service ? sanitize(body.service) : '',
      message: sanitize(body.message),
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_FROM || !process.env.SMTP_TO) {
      logError('config', 'Missing SMTP environment variables')
      return genericError()
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Start Beheer Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: sanitizedData.email,
      subject: `Nieuw contactformulier: ${sanitizedData.name}${sanitizedData.service ? ` - ${sanitizedData.service}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
            Nieuw bericht via contactformulier
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Naam:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a>
              </td>
            </tr>
            ${sanitizedData.phone ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefoon:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a>
              </td>
            </tr>
            ` : ''}
            ${sanitizedData.company ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Bedrijf:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.company}</td>
            </tr>
            ` : ''}
            ${sanitizedData.service ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Dienst:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.service}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Bericht:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
${sanitizedData.message}
            </div>
          </div>

          <p style="margin-top: 30px; color: #888; font-size: 12px;">
            Dit bericht is verzonden via het contactformulier op startbeheer.nl
          </p>
        </div>
      `,
      text: `
Nieuw bericht via contactformulier

Naam: ${sanitizedData.name}
E-mail: ${sanitizedData.email}
${sanitizedData.phone ? `Telefoon: ${sanitizedData.phone}\n` : ''}${sanitizedData.company ? `Bedrijf: ${sanitizedData.company}\n` : ''}${sanitizedData.service ? `Dienst: ${sanitizedData.service}\n` : ''}
Bericht:
${sanitizedData.message}

---
Dit bericht is verzonden via het contactformulier op startbeheer.nl
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to user
    const confirmationMail = {
      from: `"Start Beheer" <${process.env.SMTP_FROM}>`,
      to: sanitizedData.email,
      subject: 'Bedankt voor uw bericht - Start Beheer',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB;">Bedankt voor uw bericht!</h2>

          <p>Beste ${sanitizedData.name},</p>

          <p>Wij hebben uw bericht in goede orde ontvangen. Ons team neemt zo snel mogelijk contact met u op, meestal binnen 24 uur op werkdagen.</p>

          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Uw bericht:</strong>
            <p style="white-space: pre-wrap; margin-top: 10px;">${sanitizedData.message}</p>
          </div>

          <p>Heeft u een dringende vraag? Bel ons gerust op <a href="tel:+31687874001">06 87 87 40 01</a>.</p>

          <p>Met vriendelijke groet,<br>
          <strong>Team Start Beheer</strong></p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

          <p style="color: #888; font-size: 12px;">
            Start Beheer | IT Beheer, Websites & AI voor ZZP en MKB<br>
            <a href="https://startbeheer.nl">startbeheer.nl</a>
          </p>
        </div>
      `,
    }

    await transporter.sendMail(confirmationMail)

    return NextResponse.json(
      { success: true, message: 'Bericht succesvol verzonden' },
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    )
  } catch (err) {
    logError('handler', err)
    return genericError()
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
