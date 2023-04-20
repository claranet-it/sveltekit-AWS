import { signIn } from '$lib/cognito';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signIn: async ({ request }) => {
		const data = await request.formData();
		console.log('*****Data: ', data);
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		try {
			console.log('Trying to sign in');
			await signIn(email, password);
			return { signin: true };
		} catch (e: any) {
			console.log('Error: ', e);
			return fail(400, { error: e?.message ?? 'error' });
		}
	}
} satisfies Actions;
