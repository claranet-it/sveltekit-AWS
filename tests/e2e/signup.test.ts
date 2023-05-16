import { expect, test } from '@playwright/test';
import { MailSlurp } from "mailslurp-client";

test.describe('Signup', () => {
    test('Register new Cognito User', async ({ page }) => {
        const apiKey = process.env.MAILSLURP_API_KEY;
        expect(apiKey).toBeDefined();

        const mailSlurp = new MailSlurp({ apiKey: apiKey as string });
        const { id, emailAddress } = await mailSlurp.createInbox()

        const name = 'Test User';
        const password = 'TestPassword123!';

        await page.goto('/signup');
        await page.locator('input[name="email"]').type(emailAddress, { delay: 100 });
        await page.locator('input[name="name"]').type(name, { delay: 100 });
        await page.locator('input[name="password"]').type(password, { delay: 100 });
        await page.locator('button').click({ delay: 100 });
        await page.screenshot({ path: 'screenshots/after-signup.png' });

        // TODO: completare

        await mailSlurp.deleteInbox(id);
    });
});