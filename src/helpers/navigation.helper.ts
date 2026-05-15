import { Page } from "@playwright/test";

export class Navigation {
    constructor(private readonly page: Page) {}

    async openPage(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState("networkidle");
    }

    async getPageUrl() {
        return this.page.url();
    }
}