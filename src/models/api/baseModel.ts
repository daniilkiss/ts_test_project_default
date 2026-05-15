export interface BaseModel {
    Id: number;
    createdAt: string;
    updatedAt: string | null;
}

export interface User extends BaseModel {
    name: string;
    email: string;
    username: string;
    phone: string;
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

export interface IUserRequest {
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(id: number, user: UpdateUserRequest): Promise<User>;
    deleteUser(id: number): Promise<void>;
}

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
