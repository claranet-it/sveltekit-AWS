import { expect, test } from '@playwright/test';
import { MailSlurp } from 'mailslurp-client';

test.describe('Signup', () => {
	test('Register new Cognito User', async ({ page }) => {
		const apiKey = process.env.MAILSLURP_API_KEY;
		expect(apiKey).toBeDefined();

		const mailSlurp = new MailSlurp({ apiKey: apiKey as string });
		const { id, emailAddress } = await mailSlurp.createInbox();

		const name = 'Test User';
		const password = 'TestPassword123!';

		await page.goto('/signup');
		await page.locator('input[name="email"]').type(emailAddress);
		await page.locator('input[name="name"]').type(name);
		await page.locator('input[name="password"]').type(password);
		await page.locator('button').click();
		await page.screenshot({ path: 'screenshots/after-signup.png' });

		const email = await mailSlurp.waitForLatestEmail(id);

		const confirmationCode = email.body?.split(' ').pop() ?? '';

		await page.locator('input[name="email"]').type(emailAddress);
		await page.locator('input[name="code"]').type(confirmationCode);
		await page.locator('button').click();

		await page.screenshot({ path: 'screenshots/after-confirm.png' });

		await page.locator('input[name="email"]').type(emailAddress);
		await page.locator('input[name="password"]').type(password);
		await page.locator('button').click();

		await page.screenshot({ path: 'screenshots/after-signin.png' });

		await mailSlurp.deleteInbox(id);
	});
});
