import { Locator, Page } from "@playwright/test";
import { BasePage } from './base.page';

const SELECTORS = {
    inventoryItem: '[data-test="inventory-item"]',
    itemName: '[data-test="inventory-item-name"]',
    itemPrice: '[data-test="inventory-item-price"]',
    itemDescription: '[data-test="inventory-item-desc"]',
    addToCartButton: '//button[contains(@name,"add-to-cart")]',
    removeFromCartButton: '//button[contains(@name,"remove")]',
    cartItemsCount: '[data-test="shopping-cart-badge"]',
    cartButton: '[data-test="shopping-cart-link"]'
} as const;

export class InventoryPage extends BasePage {
    private readonly inventoryItems: Locator;
    private readonly cartItems: Locator;
    private readonly cartButton: Locator;

    protected readonly url = "/inventory.html";

    constructor(page: Page) {
        super(page);
        this.inventoryItems = this.page.locator(SELECTORS.inventoryItem);
        this.cartItems = this.page.locator(SELECTORS.cartItemsCount);
        this.cartButton = this.page.locator(SELECTORS.cartButton);
    }

    async addItemToCart(name: string) {
        const item = this.getInventoryItemLocatorByName(name);
        await item.hover();
        await item.locator(SELECTORS.addToCartButton).click();
    }

    async removeItemFromCart(name: string) {
        const item = this.getInventoryItemLocatorByName(name);
        await item.hover();
        await item.locator(SELECTORS.removeFromCartButton).click();
    }

    async openCartPage() {
        await this.cartButton.click();
    }

    async getInventoryItemsCount(): Promise<number> {
        return await this.inventoryItems.count();
    }

    async getCartItemsCount(): Promise<number> {
        return await this.cartItems.count();
    }

    async getInventoryItem(name: string): Promise<{
        name: string;
        price: string;
        description: string;
        buttonName: string;
    }> {
        const item = this.getInventoryItemLocatorByName(name);

        await item.hover();
        const itemName = await item.locator(SELECTORS.itemName).innerText();
        const itemPrice = await item.locator(SELECTORS.itemPrice).innerText();
        const itemDescription = await item.locator(SELECTORS.itemDescription).innerText();
        const buttonName = await item.locator(SELECTORS.addToCartButton).innerText();

        return {
            name: itemName,
            price: itemPrice,
            description: itemDescription,
            buttonName: buttonName
        };
    }

    private getInventoryItemLocatorByName(name: string): Locator {
        return this.inventoryItems.filter({ hasText: name });
    }
}