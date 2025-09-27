import { test, expect } from '@playwright/test'

test.describe('Contact Forms', () => {
  test('should show cookie banner on first visit', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(2500) // Wait for cookie banner delay
    await expect(page.locator('text=Cookie Settings')).toBeVisible()
  })

  test('should accept cookies', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(2500)
    await page.click('text=Accepteren')
    await expect(page.locator('text=Cookie Settings')).not.toBeVisible()
  })

  test('should scroll to services section', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Bekijk Onze Diensten')
    await page.waitForTimeout(1000) // Wait for scroll animation
    const servicesSection = page.locator('text=Onze Expertise')
    await expect(servicesSection).toBeInViewport()
  })
})