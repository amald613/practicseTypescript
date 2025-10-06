import { expect, Locator, Page } from "@playwright/test";

export class View{
    readonly page:Page;
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly submitButton:Locator;
    readonly viewButton:Locator;
    
    readonly coloumHeader:Locator;

    constructor(page:Page){
            this.page = page;
            this.emailInput = page.getByRole('textbox',{name:'email'}); 
            this.passwordInput= page.locator('input[type="password"]');
            this.submitButton= page.getByRole('button',{name:'submit'});
            this.viewButton= page.getByRole('combobox', { name: 'Toggle columns' });
            
            this.coloumHeader= page.locator('thead');
            

    }

    async login(){

        await this.page.goto('https://appv2.ezyscribe.com');
        
        await this.emailInput.fill('testprovider@gmail.com');

        await this.passwordInput.fill('12345678');
        await this.submitButton.click();

    }

    async viewFilter(viewValue:string){
        
    
        await this.viewButton.click();
        const columnHeaderTexts = await this.coloumHeader.allTextContents();
        await this.page.getByText(viewValue).click();
        const columnHeaderTextsAfter = await this.coloumHeader.allTextContents();
        console.log(columnHeaderTexts);
        console.log(columnHeaderTextsAfter);
        expect(columnHeaderTexts).not.toEqual(columnHeaderTextsAfter);

    }


}