import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/browser-windows');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'This is a sample page' }).click();
  await page1.getByRole('heading', { name: 'This is a sample page' }).dblclick();
  await page1.getByRole('heading', { name: 'This is a sample page' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Window', exact: true }).click();
  const page2 = await page2Promise;
  await page2.getByRole('heading', { name: 'This is a sample page' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Window', exact: true }).click();
  const page3 = await page3Promise;
  await page3.getByRole('heading', { name: 'This is a sample page' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Window', exact: true }).click();
  const page4 = await page4Promise;
  await page4.getByRole('heading', { name: 'This is a sample page' }).click();
  await page4.getByRole('heading', { name: 'This is a sample page' }).click();
});