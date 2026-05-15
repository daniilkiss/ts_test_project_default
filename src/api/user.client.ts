import { BaseApiClient } from "./base.client";
import { IUserRequest, User } from "../models/api/index";
import { APIRequestContext } from "@playwright/test";
import { UpdateUserRequest } from "../models/api/baseModel";


export class UserApiClient extends BaseApiClient implements IUserRequest {
    private readonly endpoint = "/users";
    
    constructor(request: APIRequestContext) {
        super(request);
    }

    async getAllUsers() {
        const response = await this.request.get(this.endpoint);
        await this.logResponse("GET", response);
        const body = await this.handleResponse(response);
        return body as User[];
    }

    async getUserById(id: number) {
        const response = await this.request.get(`${this.endpoint}/${id}`);
        await this.logResponse("GET", response);
        const body = await this.handleResponse(response);
        return body as User;
    }

    async createUser(user: User) {
        user.createdAt = new Date().toISOString();
        user.updatedAt = null;
        const response = await this.request.post(this.endpoint, {
            data: user
        });
        await this.logResponse("POST", response);
        const body = await this.handleResponse(response);
        return body as User;
    }

    async updateUser(id: number, user: UpdateUserRequest) {
        user.updatedAt = new Date().toISOString();
        const response = await this.request.put(`${this.endpoint}/${id}`, {
            data: user
        });
        await this.logResponse("PUT", response);
        const body = await this.handleResponse(response);
        return body as User;
    }

    async deleteUser(id: number) {
        const response = await this.request.delete(`${this.endpoint}/${id}`);
        await this.logResponse("DELETE", response);
    }       

} 