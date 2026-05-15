import { APIRequestContext, APIResponse } from "@playwright/test";
import { HttpMethods } from "../models/api/index";

export abstract class BaseApiClient {

    constructor(protected request: APIRequestContext) {}

    protected async handleResponse<T>(response: APIResponse): Promise<T>{
        return response.json() as Promise<T>;
    }

    protected async logResponse(method: HttpMethods, response: APIResponse): Promise<void> {
        console.log(`[${method}] ${response.url()} - Status: ${response.status()}`);
    }
}