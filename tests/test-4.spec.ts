import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/browser-windows');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Window Message' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Knowledge increases by').click();
});