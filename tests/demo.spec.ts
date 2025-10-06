import {test,expect} from '@playwright/test';


test('login', async ({page})=>{
page.goto('https://www.saucedemo.com');
page.getByRole('textbox',{name:'Username'}).fill('standard_user');
page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
page.getByRole('button',{name:'Login'}).click();
await expect(page.getByText('Products')).toBeVisible();


}
)