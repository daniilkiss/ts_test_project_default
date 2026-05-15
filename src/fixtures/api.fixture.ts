import { test as base } from '@playwright/test';
import { ApiClient } from '../api/index';

interface ApiFixtures {
    api: ApiClient;
}

export const test = base.extend<ApiFixtures>({
    api: async ({ request }, use) => {
        const apiClient = new ApiClient(request);
        await use(apiClient);
    }
});

export { expect } from '@playwright/test';
