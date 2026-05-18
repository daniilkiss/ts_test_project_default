import { test, expect } from "../../fixtures/api.fixture";
import { UserBuilder } from '../../builders';
import { User } from '../../models/api/index';

test.describe('User API Tests', () => {
    test("Get all users", async ({ api }) => {
        const response = await api.users.getAllUsers();
        expect(response.ok()).toBeTruthy();

        const users = await response.json() as User[];
        expect(Array.isArray(users)).toBeTruthy();

        const getUser = users.filter(user => user.name.includes("John"));
        console.log(`User with name containing 'John': ${JSON.stringify(getUser)}`);
    });

    test("Create, update and delete user", async ({ api }) => {
        
        const userData = new UserBuilder()
            .withName("John Doe")
            .withEmail("john.doe@example.com")
            .withUsername("johndoe")
            .withPhone("123-456-7890")
            .withAddress("123 Main St", "Anytown")
            .build();
        
        const createResponse = await api.users.createUser(userData);
        expect(createResponse.ok()).toBeTruthy();

        const body = await createResponse.json();
        console.log(`User created with name: ${body.name}`);
        console.log(`User: ${JSON.stringify(body)}`);
    });
});