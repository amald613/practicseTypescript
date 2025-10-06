import { test, expect } from '@playwright/test';
import { TasksPage } from '../pages/tasksOld';

test.describe('Tasks | Status Filter', () => {
  let tasksPage: TasksPage;

  test.beforeEach(async ({ page }) => {
    tasksPage = new TasksPage(page);
    await tasksPage.login('testprovider@gmail.com', '12345678');
  });

  const statusFilters = [
    { option: 'Completed', table: 'Completed' },
    { option: 'Inprogress', table: 'In Progress' }, // map dropdown to table text
  ];

  for (const status of statusFilters) {
    test(`Verify filter by status: ${status.table}`, async () => {
      await tasksPage.applyStatusFilter(status.option);
      await tasksPage.verifyTableStatus(status.table);
    });
  }

  // Multiple statuses filter
  test('Verify filter by multiple statuses: Completed + In Progress', async () => {
    for (const status of statusFilters) {
      await tasksPage.applyStatusFilter(status.option);
    }

    console.log('➡️ Checking table for matching statuses...');
    await tasksPage.page.waitForTimeout(1000);

    const texts = await tasksPage.statusCells().allTextContents();
    console.log('ℹ️ Status column values:', texts);

    const expectedTableValues = statusFilters.map((s) => s.table);
    for (const text of texts) {
      expect(expectedTableValues).toContain(text.trim());
    }
  });
});
