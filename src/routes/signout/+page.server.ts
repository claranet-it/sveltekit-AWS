import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { LayoutServerLoad } from '../$types';

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

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/signin');
	}

	return {
		session: locals.user
	};
};
