import { test, expect } from "../../fixtures/api.fixture";
import { UserBuilder } from '../../builders';
import { User } from '../../models/api/index';
import { UpdateUserRequest } from "../../models/api/baseModel";

test.describe('User API Tests', () => {
    test("Create, update and delete user", async ({ api }) => {
        
        const userData = new UserBuilder()
            .withName("John Doe")
            .withEmail("john.doe@example.com")
            .withUsername("johndoe")
            .withPhone("123-456-7890")
            .withAddress("123 Main St", "Anytown")
            .build();
        
        const createResponse = await api.users.createUser(userData);
        console.log(`User created with name: ${createResponse.name}`);
        console.log(`User: ${JSON.stringify(createResponse)}`);
    });
});