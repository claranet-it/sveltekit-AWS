import { signUp, confirm } from '$lib/cognito';
import type { Actions } from './$types';

export const actions = {
	signUp: async ({ request }) => {
		const data = await request.formData();
		const user = {
			email: data.get('email') as string,
			name: data.get('name') as string,
			password: data.get('password') as string
		};

		signUp(user.email, user.name, user.password);
	},
	confirm: async ({ request }) => {
		const data = await request.formData();
		const user = {
			email: data.get('email') as string,
			code: data.get('code') as string
		};

		confirm(user.email, user.code);
	}
} satisfies Actions;
