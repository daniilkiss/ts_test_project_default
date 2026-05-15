import {test as base} from '@playwright/test';
import { LoginPage, InventoryPage, CartPage } from '../pages/index';
import { config } from "../config/config";

interface UiFixtures {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
}

    export const test = base.extend<UiFixtures>({
        loginPage: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigation.openPage(config.baseUiUrl);
            page.waitForLoadState("networkidle");
            await use(loginPage);
        },
        inventoryPage: async ({ page }, use) => {
            const inventoryPage = new InventoryPage(page);
            await inventoryPage.navigation.openPage(config.baseUiUrl + "/inventory.html");
            page.waitForLoadState("networkidle");
            await use(inventoryPage);
        },
        cartPage: async ({ page }, use) => {
            const cartPage = new CartPage(page);
            const inventoryPage = new InventoryPage(page);
            await inventoryPage.navigation.openPage(config.baseUiUrl + "/inventory.html");
            await inventoryPage.addItemToCart("Sauce Labs Backpack");
            await inventoryPage.navigation.openPage(config.baseUiUrl + "/cart.html");
            page.waitForLoadState("networkidle");
            await use(cartPage);
        }
    });

export { expect } from '@playwright/test';