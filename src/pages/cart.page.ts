import { Page, Locator } from "@playwright/test";
import { BasePage } from './base.page';

export class CartPage extends BasePage {
    private readonly continueShoppingButton: Locator;
    private readonly checkoutButton: Locator;
    private readonly removeButton: Locator;
    protected readonly url = "/cart.html";

    constructor(page: Page) {
        super(page);
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