import { test, expect } from 'fixtures/ui.fixture';
import { InventoryPage } from 'pages/inventory.page';

test.describe("Cart page", () => {

    test("remove item from cart", async ({ cartPage, page }) => {
        const inventoryPage = new InventoryPage(page);
        const initialCartCount = await inventoryPage.getCartItemsCount();
        await cartPage.removeItemFromCart();
        const finalCartCount = await inventoryPage.getCartItemsCount();
        expect(finalCartCount).toBe(initialCartCount - 1);
    });

    test("continue shopping", async ({ cartPage }) => {
        await cartPage.clickOnContinueShopping();
        expect(await cartPage.navigation.getPageUrl()).toContain("/inventory.html");
    });

    test("checkout", async ({ cartPage }) => {
        await cartPage.clickOnCheckout();
        expect(await cartPage.navigation.getPageUrl()).toContain("/checkout-step-one.html");
    });
        
});