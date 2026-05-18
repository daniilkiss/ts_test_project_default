import { APIRequestContext, APIResponse } from "@playwright/test";
import { HttpMethods } from "../models/api/index";

export abstract class BaseApiClient {

    constructor(protected readonly request: APIRequestContext) {}

    protected logResponse(method: HttpMethods, response: APIResponse): void {
        console.log(`[${method}] ${response.url()} - Status: ${response.status()}`);
    }
}