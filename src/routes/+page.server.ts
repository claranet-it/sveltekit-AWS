import { signUp, confirm } from '$lib/cognito';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signUp: async ({ request }) => {
		const data = await request.formData();
		const user = {
			email: data.get('email') as string,
			name: data.get('name') as string,
			password: data.get('password') as string
		};

		// try {
		// 	console.log('Trying to sign up')
		// 	signUp(user.email, user.name, user.password);

		// } catch(e) {			
			return fail(400, {error: 'to confirm' });
		// }
	},
	confirm: async ({ request }) => {
		const data = await request.formData();
		const user = {
			email: data.get('email') as string,
			code: data.get('code') as string
		};

		confirm(user.email, user.code);

		return fail(400, {error: 'confirm' });
	}
} satisfies Actions;
