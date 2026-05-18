import { BaseModel } from "../api/index";

export interface CreateUserRequest extends BaseModel {
    name: string;
    email: string;
    username: string;
    phone?: string;
    address?:{
        street?: string;
        city?:string;
    }
}

export interface UpdateUserRequest {
    updatedAt?: string;
    name?: string;
    email?: string;
    username?: string;
    phone?: string;
    address?:{
        street?: string;
        city?:string;
    }
}