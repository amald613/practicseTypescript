import { expect, Locator, Page } from "@playwright/test";

export class Sort{
    readonly page:Page;
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly submitButton:Locator;
    readonly sortButton:Locator;
    readonly taskColumn:Locator;
    
    

    constructor(page:Page){
            this.page = page;
            this.emailInput = page.getByRole('textbox',{name:'email'}); 
            this.passwordInput= page.locator('input[type="password"]');
            this.submitButton= page.getByRole('button',{name:'submit'});
            this.sortButton= page.getByRole('button', { name: 'Task #' });
            this.taskColumn=page.locator('tbody td:nth-child(2)');
           
            

    }

    async login(){

        await this.page.goto('https://appv2.ezyscribe.com');
        
        await this.emailInput.fill('testprovider@gmail.com');

        await this.passwordInput.fill('12345678');
        await this.submitButton.click();
        

    }

    async sortB(){
        // await this.page.waitForLoadState('load');   // waits for "load" event (all resources)
        await this.page.waitForLoadState('networkidle'); // waits until no network requests for 500ms
        // await this.page.waitForLoadState('domcontentloaded');
        


        await this.sortButton.waitFor({ state: 'visible' });
        await this.sortButton.click();
        try {
            await this.page.getByRole('menuitemcheckbox', { name: 'Asc' }).waitFor({ timeout: 2000 });
            await this.page.getByRole('menuitemcheckbox', { name: 'Asc' }).waitFor({ state: 'visible' });
          } catch {
            // if not found, click again
            await this.sortButton.click();
            await this.page.getByRole('menuitemcheckbox', { name: 'Asc' }).waitFor({ timeout: 2000 });
          }
        
        await this.page.getByRole('menuitemcheckbox', { name: 'Asc' }).waitFor({ state: 'visible' });
        await this.page.getByRole('menuitemcheckbox', { name: 'Asc' }).click();

        await this.page.waitForTimeout(1000);
        
        const AllTaskNo = await this.taskColumn.allTextContents();
        const actual = AllTaskNo.map(n=>Number(n.trim()));
        const expected = [...actual].sort((a,b)=>a-b);
        expect(actual).toEqual(expected);


    }




}