import { verifyIdToken } from '$lib/cognito';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	if (session) {
		const idToken = session as string;

		try {
			const { email, fullName } = await verifyIdToken(idToken);
			event.locals.user = {
				isAuthenticated: true,
				email,
				fullName
			};
		} catch (err) {
			event.locals.user = {
				isAuthenticated: false
			};
		}
	}

	return resolve(event);
};
