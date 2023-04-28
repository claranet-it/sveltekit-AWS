import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signOut: async ({ cookies }) => {
		try {
			cookies.delete('session');
		} catch (e: any) {
			return fail(400, {
				error: e?.message ?? 'SignOut error'
			});
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
