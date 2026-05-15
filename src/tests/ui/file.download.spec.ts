import {test } from "@playwright/test";
import path from "path/win32";
import fs from "fs";

test.describe("File download", () => {

    test("should download a file successfully", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/download");

        const downloadPromise = page.waitForEvent('download');

        // click on the link with the desired name
        await page.getByText("basic-text.pdf").click();

        // wait for the download to complete
        const download = await downloadPromise;

        // Save the downloaded file to a specific path
        const downloadDir = path.join("src", ".downloads");
        fs.mkdirSync(downloadDir, { recursive: true });
        const filePath = path.join(downloadDir, download.suggestedFilename());
        await download.saveAs(filePath);

        // check that the file exists locally
        fs.existsSync(filePath) || test.fail(true, "File was not downloaded successfully");

        // delete file after test
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    });

});