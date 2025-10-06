import { expect, Locator, Page } from "@playwright/test";

export class Theme {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly themeButton: Locator;
    readonly themeLight: Locator;
    readonly themeDark: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'email' });
        this.passwordInput = page.locator('input[type="password"]');
        this.submitButton = page.getByRole('button', { name: 'submit' });
        this.themeButton = page.getByRole('button', { name: 'Toggle theme' });
        this.themeLight = page.getByRole('menuitem', { name: 'Light' });
        this.themeDark = page.getByRole('menuitem', { name: 'Dark' });
    }

    async changeTheme() {
        await this.page.goto('https://appv2.ezyscribe.com');
        await this.emailInput.fill('testprovider@gmail.com');
        await this.passwordInput.fill('12345678');
        await this.submitButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.themeButton.click();
        await this.themeDark.click();
        await this.page.waitForLoadState('networkidle');

        await expect.poll(async () => {
            return await this.page.locator('html').evaluate(el => el.style.colorScheme);
        }).toBe('dark');

        await this.themeButton.click();
        await this.themeLight.click();
        await this.page.waitForLoadState('networkidle');
        await expect.poll(async () => {
            return await this.page.locator('html').evaluate(el => el.style.colorScheme);
        }).toBe('light');

    }


}