import {test, expect} from '@playwright/test';

test.describe("IFrame interaction", () => {
    test.use({storageState: { cookies: [], origins: [] }});
    
    test("should interact with elements inside an iframe", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/iframe");
        const selector = "#mce_0_ifr";

        await page.waitForSelector(selector);
        const iframe = page.frameLocator(selector);
        const editor = iframe.locator("[id='tinymce']");
        const getEditorText = await editor.textContent();
        expect(getEditorText).toBe("Your content goes here.");
    });
});