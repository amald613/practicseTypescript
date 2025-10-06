import {test,Page, expect} from "@playwright/test";

test("user login",async({page})=>{
   await page.goto("https://appv2.ezyscribe.com/");
   await page.getByRole('textbox', { name: 'Email' }).fill("testprovider@gmail.com");
    await page.locator('input[name="password"]').fill("12345678");
   await page.getByRole('button', { name: 'Submit' }).click();
   expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
   

});