import { Locator } from "@playwright/test";
import { Page, expect } from "@playwright/test";

export class filter{
   readonly page:Page;
   readonly resetButton:Locator;
   readonly emailInput:Locator;
   readonly passwordInput:Locator;
   readonly submitButton:Locator;
   readonly uploadDateButton:Locator;
   readonly MonthFilter:Locator;
   readonly YearFilter:Locator;
   readonly DateFilter:Locator;

   constructor(page:Page){
      this.page=page;
      this.resetButton=page.getByRole('button',{name:'Reset'});
      this.emailInput=page.getByRole('textbox',{name:'Email'});
      this.passwordInput=page.locator('input[name="password"]');
      this.submitButton=page.getByRole('button',{name:'Submit'});
      this.uploadDateButton=page.getByRole('toolbar').getByRole('button',{name:'Upload Date'}); 
      this.MonthFilter=page.getByLabel('Choose the Month');
      this.YearFilter=page.getByLabel('Choose the Year');
      this.DateFilter=page.getByRole('gridcell', { name: '15' });

   }
   async Login(email:string,password:string){
    await this.page.goto('https://appv2.ezyscribe.com/auth/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
   }

   async clickResetButton(){
     await this.resetButton.click();

   }

   async clickUploadDateButton(){
    await this.uploadDateButton.click();
   }

   async selectFromDate(month:string,year:string,day:string){
     await this.MonthFilter.selectOption({label:month});
     await this.YearFilter.selectOption({label:year});
     await this.page.getByRole('gridcell', { name: day }).click();
     
   }
   async selectToDate(month:string,year:string,day:string){
    await this.MonthFilter.selectOption({label:month});
    await this.YearFilter.selectOption({label:year});
    await this.page.getByRole('gridcell', { name: day }).click();
    const body =this.page.locator("//tbody[@data-slot='table-body']")
    await expect (body).toContainText(new RegExp(`${month}|No results`));
    console.log(body.allInnerTexts);
  }
   




}