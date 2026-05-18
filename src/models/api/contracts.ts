import {CreateUserRequest, UpdateUserRequest} from "./user.model";
import {APIResponse} from "@playwright/test";

export interface IUserRequest {
    getAllUsers(): Promise<APIResponse>;
    getUserById(id: number): Promise<APIResponse>;
    createUser(user: CreateUserRequest): Promise<APIResponse>;
    updateUser(id: number, user: UpdateUserRequest): Promise<APIResponse>;
    deleteUser(id: number): Promise<APIResponse>;
}

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';