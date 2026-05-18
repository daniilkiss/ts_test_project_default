import { BaseApiClient } from "./base.client";
import { IUserRequest, CreateUserRequest } from "../models/api/index";
import { APIRequestContext } from "@playwright/test";
import { UpdateUserRequest } from "../models/api/index";
import { APIResponse } from "@playwright/test";

export class UserApiClient extends BaseApiClient implements IUserRequest {
    private readonly endpoint = "/users";
    
    constructor(request: APIRequestContext) {
        super(request);
    }

    async getAllUsers(): Promise<APIResponse> {
        const response = await this.request.get(this.endpoint);
        this.logResponse("GET", response);
        return response;
    }

    async getUserById(id: number): Promise<APIResponse> {
        const response = await this.request.get(`${this.endpoint}/${id}`);
        this.logResponse("GET", response);
        return response;
    }

    async createUser(user: CreateUserRequest): Promise<APIResponse> {
        const userData = {
            ...user,
            createdAt: new Date().toISOString(),
            updatedAt: null
        }
        const response = await this.request.post(this.endpoint, { data: userData });
        this.logResponse("POST", response);
        return response;
    }

    async updateUser(id: number, user: UpdateUserRequest): Promise<APIResponse> {
        const userData = {
            ...user,
            updatedAt: new Date().toISOString()
        }
        const response = await this.request.put(`${this.endpoint}/${id}`, { data: userData });
        this.logResponse("PUT", response);
        return response;
    }

    async deleteUser(id: number): Promise<APIResponse> {
        const response = await this.request.delete(`${this.endpoint}/${id}`);
        this.logResponse("DELETE", response);
        return response;
    }       

} 