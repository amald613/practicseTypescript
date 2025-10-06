import { priority } from "../pages/priorty";
import {test,expect} from "@playwright/test";

test('priority testing',async({page})=>{
    const priorityPage = new priority(page);

    await page.goto('https://appv2.ezyscribe.com');

    await priorityPage.emailInput.fill('testprovider@gmail.com');
    await priorityPage.passwordInput.fill('12345678');
    await priorityPage.submitButton.click();

    await priorityPage.priorityBtn.click();
    await priorityPage.lowBtn.click();
    await expect(priorityPage.lowBtn).toHaveAttribute('aria-selected','true');

    await page.waitForTimeout(1000);
     
    const cellTexts = await priorityPage.priorityColumn.allTextContents();

    for (const text of cellTexts){
        
        expect(text.trim()).toBe('Low');

    }
    
    

})