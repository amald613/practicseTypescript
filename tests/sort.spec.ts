import test from "@playwright/test";
import { Sort } from "../pages/sort";

test('sort the taskNo',async({page})=>{
    const sortPage = new Sort(page);
    await sortPage.login();
    await sortPage.sortB();
    
})