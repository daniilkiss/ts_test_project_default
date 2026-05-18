import { BaseModel } from "./base.model";

export interface User extends BaseModel {
    name: string;
    email: string;
    username: string;
    phone?: string;
    address?: { street?: string; city?: string; }
}

export interface CreateUserRequest {
    name: string;
    email: string;
    username: string;
    phone?: string;
    address?: { street?: string; city?: string; }
}

export interface UpdateUserRequest {
    updatedAt?: string;
    name?: string;
    email?: string;
    username?: string;
    phone?: string;
    address?: { street?: string; city?: string; }
}