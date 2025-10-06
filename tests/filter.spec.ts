import { filter } from "../pages/filter";
import {test, Page} from "@playwright/test";

test('filter button selection',async ({page})=>{
    const filterPage:filter = new filter(page);
    await filterPage.Login('testprovider@gmail.com','12345678');
    await page.waitForLoadState('networkidle');
    await filterPage.clickResetButton();
    await filterPage.clickUploadDateButton();
    await filterPage.selectFromDate('Aug','2024','15');
    await filterPage.selectToDate('Sep','2025','15');


})