import { signUp } from '$lib/cognito';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signUp: async ({ request }) => {
		const data = await request.formData();
		const user = {
			email: data.get('email') as string,
			name: data.get('name') as string,
			password: data.get('password') as string
		};

		let userConfirmed = false;
		try {
			userConfirmed = await signUp(user.email, user.name, user.password);
		} catch (e: any) {
			return fail(400, {
				error: e?.message ?? 'Signup error'
			});
		}

		if (!userConfirmed) {
			throw redirect(303, '/confirm');
		}
		throw redirect(303, '/');
	}
} satisfies Actions;
