import { confirm } from '$lib/cognito';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	confirm: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const code = data.get('code') as string;

		try {
			const res = await confirm(email, code);

			console.log(res, email, code);

			return { success: true };
		} catch (e: any) {
			console.log(e);
			return fail(400, { error: e?.message ?? 'error' });
		}

		return { success: true };
	}
} satisfies Actions;
