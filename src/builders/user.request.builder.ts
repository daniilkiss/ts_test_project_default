import { User } from "../models/api/index";

export class UserBuilder{
    private user: Partial<User> = {};

    constructor() {
        this.user.Id = this.generateId();
    }

    withName(name: string): UserBuilder {
        this.user.name = name;
        return this;
    }   

    withEmail(email: string): UserBuilder {
        this.user.email = email;
        return this;
    }

    withUsername(username: string): UserBuilder {
        this.user.username = username;
        return this;
    }   

    withPhone(phone: string): UserBuilder {
        this.user.phone = phone;
        return this;
    }

    withAddress(street: string, city: string): UserBuilder {
        this.user.address = {
            street,
            city
        };
        return this;
    }  


    build(): User {
        return this.user as User;
    }

    private generateId(): number {
        return Math.floor(Math.random() * 100000);
    }


}