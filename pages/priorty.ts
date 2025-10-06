import { Locator, Page } from "@playwright/test";


export class priority{
    readonly page:Page;
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly submitButton:Locator;
    readonly priorityBtn:Locator;
    readonly lowBtn:Locator;
    readonly priorityColumn:Locator;
    readonly recordButton:Locator;

        constructor(page:Page){

            this.page = page;
            this.emailInput = page.getByRole('textbox',{name:'email'}); 
            this.passwordInput= page.locator('input[type="password"]');
            this.submitButton= page.getByRole('button',{name:'submit'});
            this.priorityBtn = page.getByRole('toolbar').getByRole('button',{name:'Priority'});
            this.lowBtn = page.getByRole('option',{name:'Low'});
            this.priorityColumn = page.locator('tbody tr td:nth-child(5)');
                this.recordButton = page.getByRole('toolbar').filter({has: page.getByRole('button',{name:'Status'})});
             


    }



}