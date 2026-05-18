import { CreateUserRequest } from "models/api/index";

export class UserBuilder{
    private user: Partial<CreateUserRequest> = {};

    constructor() {
        this.user.name = "Default Name";
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


    build(): CreateUserRequest {
        if (!this.user.name) {
            throw new Error("UserBuilder: name is required");
        }

        return this.user as CreateUserRequest;
    }

}