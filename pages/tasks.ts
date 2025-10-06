import {Locator, Page, test,expect} from '@playwright/test';

export class TaskPage{

    readonly page:Page
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly submitButton:Locator;
    readonly searchInput:Locator;
//status
    readonly statusFilter:Locator;
    readonly statusAiProcessing:Locator;
    readonly statusAiDraft:Locator
    readonly statusInEhr:Locator;
    readonly statusInProgress:Locator;
    readonly statusCompleted:Locator;
    readonly statusOnHold:Locator;
    readonly statusPending:Locator;
    readonly statusColumnCells:Locator;

//Filter
    readonly priorityFilter:Locator;
    readonly viewButton:Locator;

        

        constructor (page:Page){

            this.page = page
            this.emailInput = page.getByRole('textbox',{name:'email'}); 
            this.passwordInput= page.locator('input[type="password"]');
            this.submitButton= page.getByRole('button',{name:'submit'});
            this.searchInput= page.getByRole('textbox',{name:'Search task numbers...'});
           
        //status
            this.statusFilter=page.getByRole('toolbar').getByRole('button',{name:'Status'});
            this.statusAiProcessing=page.getByRole('option',{name:'AI Processing'});
            this.statusAiDraft=page.getByRole('option',{name:'AI Draft'});
            this.statusInEhr=page.getByRole('option',{name:'InEhr'});
            this.statusInProgress=page.getByRole('option',{name:'Inprogress'});
            this.statusCompleted=page.getByRole('option',{name:'Completed'});
            this.statusOnHold=page.getByRole('option',{name:'OnHold'});
            this.statusPending=page.getByRole('option',{name:'Pending'});
            this.statusColumnCells = page.getByRole('row').locator('td:nth-child(4)'); 

        //Filter
            this.priorityFilter=page.getByRole('toolbar').getByRole('button',{name:'Priority'});
            this.viewButton=page.getByRole('toolbar').getByRole('combobox',{name:'Toggle Columns'});

        }

        async nav(email:string,password:string){
            await this.page.goto('https://appv2.ezyscribe.com/auth/login');
            await this.emailInput.fill(email);
            await this.passwordInput.fill(password);
            await this.submitButton.click();
        }

        async verifyLogin(){
          await  expect(this.page).toHaveURL(/.*\/tasks/);

        }
        async verifyNotLogin(){
            await  expect(this.page).not.toHaveURL(/.*\/tasks/);
  
          }

        async selectStatusFilter(status: 'AI Processing' | 'AI Draft' | 'In Ehr' | 'In Progress' |'Completed' | 'On Hold' |'Pending'){
            await this.statusFilter.click();

            switch(status){
                case 'AI Processing':await this.statusAiProcessing.click();break;
                case 'AI Draft': await this.statusAiDraft.click();break;
                case 'In Ehr': await this.statusInEhr.click();break;
                case 'In Progress':await this.statusInProgress.click();break;
                case 'Completed':await this.statusCompleted.click();break;
                case 'On Hold':await this.statusOnHold.click();break;
                case 'Pending':await this.statusPending.click();break;


            }
            
            await this.page.waitForTimeout(1000);
            const sts = await this.statusColumnCells.allTextContents();
            console.log(sts);

            for(const st of sts){
                    expect(st.trim().toLowerCase).toBe(status.toLowerCase);
            }

            
           

        }

}