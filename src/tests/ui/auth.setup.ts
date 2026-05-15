import { test as setup } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { config } from "../../config/config";
import path from "path"
import fs from "fs";

const AUTH_FILE = path.join("src", ".auth", "ui-auth.json");

setup("authorization", async ({ page }) => {
    const loginPage = new LoginPage(page);

    fs.mkdirSync(path.join("src", ".auth"), { recursive: true });
    await loginPage.navigation.openPage(config.baseUiUrl);
    await loginPage.login(config.username, config.password);
    await page.waitForLoadState("networkidle");
    await page.context().storageState({ path: AUTH_FILE });
});