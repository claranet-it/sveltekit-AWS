import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	if (!locals.user && url.pathname === '/') {
		throw redirect(302, '/signin');
	}

	return {
		session: locals.user
	};
};
