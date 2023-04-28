import { confirm } from '$lib/cognito';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	confirm: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const code = data.get('code') as string;

		try {
			await confirm(email, code);
		} catch (e: any) {
			return fail(400, { error: e?.message ?? 'Confirm error' });
		}

		throw redirect(303, '/signin');
	}
} satisfies Actions;
