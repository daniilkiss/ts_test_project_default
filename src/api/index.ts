import { User } from "../models/api";

export { BaseApiClient } from "./base.client";
export { UserApiClient } from "./user.client";
import { APIRequestContext } from "@playwright/test";
import { UserApiClient } from "./user.client";

export class ApiClient {
    public readonly users: UserApiClient;

    constructor(request: APIRequestContext) {
        this.users = new UserApiClient(request);
    }
    
}