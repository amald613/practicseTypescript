import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept('amal'); // or dialog.dismiss()
  });// 👈 start waiting for the alert
    await page.locator('#promtButton').click() // 👈 triggers the alert
 
 
});