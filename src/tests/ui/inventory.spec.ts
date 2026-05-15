import { test, expect } from 'fixtures/ui.fixture';

test.describe("Inventory page", () => {

    const inventoryItems = [
        { name: "Sauce Labs Backpack", price: 29.99 },
        { name: "Sauce Labs Bike Light", price: 9.99 },
        { name: "Sauce Labs Bolt T-Shirt", price: 15.99 }
    ];

    test("inventory page not empty", async ({ inventoryPage }) => {
        const itemCount = await inventoryPage.getInventoryItemsCount();
        expect(itemCount).toBeGreaterThan(0);
    });

    inventoryItems.forEach(({ name, price }) => {
        test(`should display item: ${name} with price: ${price}`, async ({ inventoryPage }) => {
            const item = await inventoryPage.getInventoryItem(name);

            expect(item.name).toBe(name);
            expect(item.price).toBe(`$${price}`);
            expect(item.description).toBeTruthy();
            expect(item.buttonName).toBe("Add to cart");
        });
    });

    test("should add and remove items to the cart", async ({ inventoryPage }) => {
        const itemName = "Sauce Labs Onesie";
        const initialCartCount = await inventoryPage.getCartItemsCount();

        await inventoryPage.addItemToCart(itemName);
        const afterAddingCartCount = await inventoryPage.getCartItemsCount();
        expect(afterAddingCartCount).toBe(initialCartCount + 1);

        await inventoryPage.removeItemFromCart(itemName);
        const afterRemovalCartCount = await inventoryPage.getCartItemsCount();
        expect(afterRemovalCartCount).toBe(initialCartCount);
    });
});