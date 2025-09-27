import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to IT Support page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=IT Support')
    await expect(page).toHaveURL('/it-support')
    await expect(page.locator('h1')).toContainText('IT Support')
  })

  test('should navigate to Marketing page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Marketing')
    await expect(page).toHaveURL('/marketing')
    await expect(page.locator('h1')).toContainText('Growth Marketing')
  })

  test('should navigate to Websites page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Websites')
    await expect(page).toHaveURL('/websites')
    await expect(page.locator('h1')).toContainText('Websites')
  })

  test('should navigate to AI page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=AI & Automation')
    await expect(page).toHaveURL('/ai')
    await expect(page.locator('h1')).toContainText('AI & Automation')
  })
})