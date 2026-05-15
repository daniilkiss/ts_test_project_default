import { Page, Locator } from "@playwright/test";
import { Navigation } from '../pages/index';

export class CartPage {
    readonly navigation: Navigation;
    private readonly continueShoppingButton: Locator;
    private readonly checkoutButton: Locator;
    private readonly removeButton: Locator;

    constructor(private readonly page: Page) {
        this.navigation = new Navigation(page);
        this.continueShoppingButton = page.getByRole("button", { name: "Continue Shopping" });
        this.checkoutButton = page.getByRole("button", { name: "Checkout" });
        this.removeButton = page.getByRole("button", { name: "Remove" });
    }

    async clickOnContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async clickOnCheckout() {
        await this.checkoutButton.click();  
    }

    async removeItemFromCart() {
        await this.removeButton.click();
    }
}