import {User, UpdateUserRequest} from "../api/index";
import {APIResponse} from "@playwright/test";

export interface IUserRequest {
    getAllUsers(): Promise<APIResponse>;
    getUserById(id: number): Promise<APIResponse>;
    createUser(user: User): Promise<APIResponse>;
    updateUser(id: number, user: UpdateUserRequest): Promise<APIResponse>;
    deleteUser(id: number): Promise<APIResponse>;
}

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';