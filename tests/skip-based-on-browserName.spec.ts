import { test, expect } from '../fixture';

test.describe('Skip based on browserName', () => {
  test.describe('Level 2', () => {
    test.describe('Level 3', () => {
      
      test.skip(({ browserName }) => browserName === 'chromium');
      test.beforeAll(() => {
        console.log("================= I'm beforeAll() =================")
      })

      test.beforeAll(() => {
        console.log("================= I'm afterAll() =================")
      })

      test('has title', async ({ page }) => {
        await page.goto('https://playwright.dev/');
      
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);
      })
      test('get started link', async ({ page }) => {
        await page.goto('https://playwright.dev/');
      
        // Click the get started link.
        await page.getByRole('link', { name: 'Get started' }).click();
      
        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
      })
    });
  })
})