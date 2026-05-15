import dotenv from "dotenv";
dotenv.config();

interface Config{
    baseApiUrl: string;
    baseUiUrl: string;
    username: string;
    password: string;
}

function getConfig(): Config {
    return {
        baseApiUrl: process.env.BASE_API_URL || "http://localhost:3000",
        baseUiUrl: process.env.BASE_UI_URL || "http://localhost:3001",
        username: process.env.USER_NAME || "standard_user",
        password: process.env.PASSWORD || "secret_sauce"
    }
}

export const config = getConfig();