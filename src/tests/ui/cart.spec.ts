import { test, expect } from 'fixtures/ui.fixture';
import { InventoryPage } from 'pages/index';

test.describe("Cart page", () => {

    test.beforeEach(async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.openPage();
        await inventoryPage.addItemToCart("Sauce Labs Backpack");
    });

    test("remove item from cart", async ({ cartPage, page }) => {
        const inventoryPage = new InventoryPage(page);
        const initialCartCount = await inventoryPage.getCartItemsCount();
        await cartPage.openPage();
        await cartPage.removeItemFromCart();
        const finalCartCount = await inventoryPage.getCartItemsCount();
        expect(finalCartCount).toBe(initialCartCount - 1);
    });

    test("continue shopping", async ({ cartPage }) => {
        await cartPage.openPage();
        await cartPage.clickOnContinueShopping();
        expect(await cartPage.getPageUrl()).toContain("/inventory.html");
    });

    test("checkout", async ({ cartPage }) => {
        await cartPage.openPage();
        await cartPage.clickOnCheckout();
        expect(await cartPage.getPageUrl()).toContain("/checkout-step-one.html");
    });
        
});