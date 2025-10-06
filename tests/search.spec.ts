import { Search } from "../pages/search"
import { Page, test } from "@playwright/test"
test('search functionality',async({page})=>{
    const searchPage = new Search(page);
    await searchPage.login();
    await searchPage.serachFilter();
});