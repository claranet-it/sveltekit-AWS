import { signIn } from '$lib/cognito';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signIn: async ({ request, cookies }) => {
		const data = await request.formData();
		console.log('*****Data: ', data);
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		try {
			console.log('Trying to sign in');
			await signIn(email, password);

			cookies.set('session', email, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: false,
				maxAge: 60 * 60 * 24 * 30
			});

			return { signin: true };
		} catch (e: any) {
			console.log('Error: ', e);
			return fail(400, { error: e?.message ?? 'error' });
		}
	}
} satisfies Actions;
