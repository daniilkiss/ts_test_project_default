import { defineConfig } from "@playwright/test";
import { config } from "./src/config/config";
import path from "path";

const AUTH_FILE = path.join("src", ".auth", "ui-auth.json");

export default defineConfig({

    testDir: "./src/tests", // где искать тесты
    retries: 2, // сколько раз перезапустить упавший тест
    fullyParallel: true, // запускать тесты параллельно или нет
    reporter: [ ["list"], ["html"]  ], // настройки репортера — что выводить в консоль

    projects: [
        {
            name: "api",
            testMatch: "api/**/*.spec.ts",
            use: {
                baseURL: config.baseApiUrl,
                trace: "on-first-retry",
            }
        },
        {
            name: "ui",
            testMatch: "ui/**/*.spec.ts",
            // dependencies: ["ui-setup"],
            use: {
                baseURL: config.baseUiUrl,
                trace: "on-first-retry",
                headless: false,
                screenshot: "only-on-failure",
                video: "on",
                storageState: AUTH_FILE,
            }
        },
        {
            name: "ui-setup",
            testMatch: "ui/**/auth.setup.ts",
            use: {
                baseURL: config.baseUiUrl,
                headless: false,
            }
        },
    ]
});