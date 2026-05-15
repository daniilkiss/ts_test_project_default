import { Page, Locator } from "@playwright/test";
import { Navigation } from '../pages/index';

export class LoginPage {
    readonly navigation: Navigation;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorText: Locator;

    constructor(private readonly page: Page) {
        this.navigation = new Navigation(page);
        this.usernameInput = this.page.locator('[data-test="username"]');
        this.passwordInput = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        this.errorText = this.page.locator('[data-test="error"]');
    }

    async login(username: string, password: string) {
        await this.usernameInput.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorText.textContent() || '';
    }

    
}