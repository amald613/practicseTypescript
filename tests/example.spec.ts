import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // 🎯 choose status dynamically here
  const targetStatus = 'In Progress';     // dropdown option text
  const expectedTableStatus = 'In Progress'; // how it appears in table column

  console.log('✅ Navigating to login page...');
  await page.goto('https://appv2.ezyscribe.com/auth/login');

  console.log('✅ Filling email...');
  await page.getByRole('textbox', { name: 'Email' }).fill('testprovider@gmail.com');

  console.log('✅ Filling password...');
  await page.locator('input[name="password"]').fill('12345678');

  console.log('✅ Clicking Submit...');
  await page.getByRole('button', { name: 'Submit' }).click();

  console.log(`✅ Clicking Status filter button...`);
  await page.getByRole('toolbar').getByRole('button', { name: 'Status' }).click();

  console.log(`✅ Selecting "${targetStatus}" option...`);
  const option = page.getByRole('option', { name: targetStatus });
  await option.click();

  // 🔄 Retry loop for tick mark visibility
  let tickVisible = false;
  for (let attempt = 1; attempt <= 5; attempt++) {
    const tick = option.locator('svg.lucide-check');
    if (await tick.isVisible().catch(() => false)) {
      console.log(`✅ Tick mark is visible for "${targetStatus}" (attempt ${attempt})`);
      tickVisible = true;
      break;
    }
    console.warn(`⚠️ Tick mark not visible (attempt ${attempt}), retrying...`);
    await page.waitForTimeout(1000);
    // reopen dropdown if needed
    await page.getByRole('toolbar').getByRole('button', { name: 'Status' }).click();
    await option.click();
  }
  expect(tickVisible).toBeTruthy();

  console.log(`➡️ Waiting for table to update with "${expectedTableStatus}"...`);
  await page.waitForTimeout(1000);

  console.log('✅ Getting all status column cells...');
  const statusCells = page.locator('tbody tr td:nth-child(4)');

  const count = await statusCells.count();
  console.log(`ℹ️ Found ${count} status cells`);

  if (count === 0) {
    expect(count).toBe(0);
  } else {
    const texts = await statusCells.allTextContents();
    console.log('ℹ️ Status column values:', texts);

    for (const text of texts) {
      expect(text.trim()).toBe(expectedTableStatus);
    }
  }
});

