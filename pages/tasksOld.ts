import { Page, expect } from '@playwright/test';

export class TasksPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  statusFilterButton = () => this.page.getByRole('toolbar').getByRole('button', { name: 'Status' });
  statusOption = (status: string) => this.page.getByRole('option', { name: status });
  statusCells = () => this.page.locator('tbody tr td:nth-child(4)');

  // Actions
  async login(email: string, password: string) {
    console.log('✅ Navigating to login page...');
    await this.page.goto('https://appv2.ezyscribe.com/auth/login');

    console.log('✅ Filling email...');
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);

    console.log('✅ Filling password...');
    await this.page.locator('input[name="password"]').fill(password);

    console.log('✅ Clicking Submit...');
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async applyStatusFilter(targetStatus: string) {
    console.log(`✅ Clicking Status filter button...`);
    await this.statusFilterButton().click();

    console.log(`✅ Selecting "${targetStatus}" option...`);
    const option = this.statusOption(targetStatus);
    await option.click();

    // 🔄 Retry loop for tick mark
    let tickVisible = false;
    for (let attempt = 1; attempt <= 5; attempt++) {
      const tick = option.locator('svg.lucide-check');
      if (await tick.isVisible().catch(() => false)) {
        console.log(`✅ Tick mark is visible for "${targetStatus}" (attempt ${attempt})`);
        tickVisible = true;
        break;
      }
      console.warn(`⚠️ Tick mark not visible (attempt ${attempt}), retrying...`);
      await this.page.waitForTimeout(1000);
      await this.statusFilterButton().click();
      await option.click();
    }
    expect(tickVisible).toBeTruthy();
  }

  async verifyTableStatus(expectedStatus: string) {
    console.log(`➡️ Waiting for table to update with "${expectedStatus}"...`);
    await this.page.waitForTimeout(1000);

    console.log('✅ Getting all status column cells...');
    const cells = this.statusCells();
    const count = await cells.count();
    console.log(`ℹ️ Found ${count} status cells`);

    if (count === 0) {
      expect(count).toBe(0);
    } else {
      const texts = await cells.allTextContents();
      console.log('ℹ️ Status column values:', texts);
      for (const text of texts) {
        expect(text.trim()).toBe(expectedStatus);
      }
    }
  }
}
