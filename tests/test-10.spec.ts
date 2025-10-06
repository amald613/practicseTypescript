import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  await page.getByRole('button', { name: 'Select a file' }).click();
  await page.getByRole('button', { name: 'Select a file' }).setInputFiles('.lmstudio-home-pointer');
  await page.locator('.col-12 > div:nth-child(3)').click();
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download1 = await download1Promise;
});