import { View } from "../pages/view";
import test from "@playwright/test";

test('column visibilty',async({page})=>{
    const viewPage = new View(page);
    await viewPage.login();
    await viewPage.viewFilter('taskNo');

});
