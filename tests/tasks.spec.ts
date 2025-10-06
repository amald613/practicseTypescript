import {test} from '@playwright/test';

import { TaskPage } from '../pages/tasks';



test.describe('tasks page tests',()=>{
let taskPage:TaskPage;
test.beforeEach(async ({ page }) => {
    taskPage = new TaskPage(page);
    await taskPage.nav('testprovider@gmail.com', '12345678');
    await taskPage.verifyLogin();

    
  });


// test('test case 1 - verify login by valid credentials',async({page})=>{

//     let taskPage:TaskPage = new TaskPage(page);

//     await taskPage.nav('testprovider@gmail.com','12345678');
//     await taskPage.verifyLogin();
//     await taskPage.statusFilter.click();

// } );

// test('test case 2 - verify login by invalid credentials',async({page})=>{

//     let taskPage:TaskPage = new TaskPage(page);

//     await taskPage.nav('testprovide@gmail.com','1234678');
//     await taskPage.verifyNotLogin();

// } );

test('Status filter selection assertion', async({})=>{
    
    await taskPage.selectStatusFilter('Pending');
    


});

})
