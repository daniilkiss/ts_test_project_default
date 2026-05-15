import { test, expect } from '../../fixtures/ui.fixture';
import { config } from "../../config/config";

test.describe("Login", () => {

    test.use({storageState: { cookies: [], origins: [] }}); // сброс storageState для этих тестов — без авторизации

    const invalidCredentials = [
        { username: 'invalid_user', password: 'invalid_password', description: 'Invalid username and password', errorMessage: 'Epic sadface: Username and password do not match any user in this service'},
        { username: '', password: '', description: 'Empty username and password', errorMessage: 'Epic sadface: Username is required' },
        { username: config.username, password: '', description: 'Empty password', errorMessage: 'Epic sadface: Password is required' },
        { username: 'locked_out_user', password: config.password, description: 'Locked out user', errorMessage: 'Epic sadface: Sorry, this user has been locked out.' }
    ];

    test('with valid credentials', async ({ loginPage, page }) => {
        await loginPage.login(config.username, config.password);
        expect(page).toHaveURL('/inventory.html');
    });

    for (const { username, password, description, errorMessage } of invalidCredentials) {
        test(`with invalid credentials: ${description}`, async ({ loginPage, page }) => {
            await loginPage.login(username, password);
            const actualErrorMessage = await loginPage.getErrorMessage();
            expect(actualErrorMessage).toBe(errorMessage);
            expect(page).toHaveURL(config.baseUiUrl);
        });
    }
});