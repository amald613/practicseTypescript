import { Theme } from "../pages/Theme";
import { test } from "@playwright/test";
test('change theme',async({page})=>{
    const theme = new Theme(page);
    await theme.changeTheme();
});