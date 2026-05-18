import { Page } from "@playwright/test";

export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    protected abstract readonly url: string;

    async openPage(): Promise<void> {
        await this.page.goto(this.url);
        await this.page.waitForLoadState("networkidle");
    }

    async getPageUrl(): Promise<string> {
        return this.page.url();
    }
}