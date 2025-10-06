import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/modal-dialogs');
  await page.getByRole('button', { name: 'Small modal' }).click();
  await page.locator('#closeSmallModal').click();
  await page.getByRole('button', { name: 'Large modal' }).click();
  await page.locator('#closeLargeModal').click();
});
await page.getByRole('button', { name: 'Small modal' }).click();
await page.getByText('×Close').click();
await page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
await page.getByText('Practice Form').click();
await page.locator('#dateOfBirthInput').click();
await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('3');
await page.getByRole('combobox').nth(1).selectOption('2014');
await page.getByRole('option', { name: 'Choose Wednesday, April 16th,' }).click();
await page.locator('#state svg').click();
await page.getByText('Uttar Pradesh', { exact: true }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByRole('button', { name: 'Submit' }).click();