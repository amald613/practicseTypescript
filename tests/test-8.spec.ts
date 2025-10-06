import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/nestedframes');
  await page.locator('#frame1').contentFrame().locator('iframe').contentFrame().locator('html').click();
  await page.locator('#frame1').contentFrame().getByText('Parent frame').click();
  await page.locator('#frame1').contentFrame().locator('iframe').contentFrame().locator('html').click();
  await page.locator('#frame1').contentFrame().getByText('Parent frame').click();
});
await page.locator('#frame1').contentFrame().getByText('Parent frame').click();