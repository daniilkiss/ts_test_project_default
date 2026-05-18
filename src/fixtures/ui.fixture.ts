import {test as base} from '@playwright/test';
import { LoginPage, InventoryPage, CartPage } from '../pages/index';

interface UiFixtures {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
}

    export const test = base.extend<UiFixtures>({
        loginPage: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await loginPage.openPage();
            await use(loginPage);
        },
        inventoryPage: async ({ page }, use) => {
            const inventoryPage = new InventoryPage(page);
            await inventoryPage.openPage();
            await use(inventoryPage);
        },
        cartPage: async ({ page }, use) => {
            const cartPage = new CartPage(page);
            await use(cartPage);
        }
    });

export { expect } from '@playwright/test';