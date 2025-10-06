import { expect, Locator, Page } from "@playwright/test";

export class Search{
    readonly page:Page;
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly submitButton:Locator;
    readonly searchButton:Locator;
    readonly taskCellCheck:Locator;
    readonly taskCellPick:Locator;
    
    

    constructor(page:Page){
            this.page = page;
            this.emailInput = page.getByRole('textbox',{name:'email'}); 
            this.passwordInput= page.locator('input[type="password"]');
            this.submitButton= page.getByRole('button',{name:'submit'});
            this.searchButton= page.getByRole('textbox', { name: 'Search task numbers...' });
            this.taskCellPick=page.locator('tbody tr:nth-child(2) td:nth-child(2)');
            this.taskCellCheck=page.locator('tbody tr:nth-child(1) td:nth-child(2)');
           
            

    }

    async login(){

        await this.page.goto('https://appv2.ezyscribe.com');
        
        await this.emailInput.fill('testprovider@gmail.com');

        await this.passwordInput.fill('12345678');
        await this.submitButton.click();
        
    }

    async serachFilter(){
        await this.page.waitForLoadState('networkidle');
        const input = (await this.taskCellPick.innerText()).trim();
       
        await this.searchButton.fill(input);
        
        await expect(this.taskCellCheck).toHaveText(input, { timeout: 5000 });


        // await expect.poll(async () => {
        //     return await this.taskCellCheck.textContent();
        //   }).toBe(input);
          



        // await this.page.waitForTimeout(1000);
        // const output = (await this.taskCellCheck.innerText()).trim()
        // expect(input).toEqual(output);
        // await expect(this.taskCellCheck).toHaveText(input, { timeout: 5000 });


    }




}