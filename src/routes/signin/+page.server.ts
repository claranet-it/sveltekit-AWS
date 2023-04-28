import { signIn } from '$lib/cognito';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signIn: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		try {
			const idToken = await signIn(email, password);

			cookies.set('session', idToken, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: false,	// TODO: set to true in production
				maxAge: 60 * 60 * 24 * 30
			});
		} catch (e: any) {
			return fail(400, {
				error: e?.message ?? 'login error'
			});
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
