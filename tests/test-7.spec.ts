import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');
  await page.locator('#frame1').contentFrame().getByRole('heading', { name: 'This is a sample page' }).click();
await page.locator('#frame2').contentFrame().getByRole('heading', { name: 'This is a sample page' }).click();
  await page.locator('#frame1').contentFrame().getByRole('heading', { name: 'This is a sample page' }).click();
  await page.locator('#frame2').contentFrame().getByRole('heading', { name: 'This is a sample page' }).click();
});