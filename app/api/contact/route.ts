import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
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

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      )
    }

    // Validate email
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      )
    }

    // Validate phone if provided
    if (body.phone && !isValidPhone(body.phone)) {
      return NextResponse.json(
        { error: 'Ongeldig telefoonnummer' },
        { status: 400 }
      )
    }

    // Validate message length
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

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // SSL
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
          <h2 style="color: #00D9FF; border-bottom: 2px solid #00D9FF; padding-bottom: 10px;">
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
          <h2 style="color: #00D9FF;">Bedankt voor uw bericht!</h2>

          <p>Beste ${sanitizedData.name},</p>

          <p>Wij hebben uw bericht in goede orde ontvangen. Ons team neemt zo snel mogelijk contact met u op, meestal binnen 24 uur op werkdagen.</p>

          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Uw bericht:</strong>
            <p style="white-space: pre-wrap; margin-top: 10px;">${sanitizedData.message}</p>
          </div>

          <p>Heeft u een dringende vraag? Bel ons gerust op <a href="tel:+31850805905">085 080 5905</a>.</p>

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
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}
