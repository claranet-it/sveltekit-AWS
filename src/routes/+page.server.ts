import type { Actions } from './$types';

export const actions = {
	signUp: async ({ request }) => {
		const data = await request.formData();
		const user = {
			email: data.get('email'),
			name: data.get('name'),
			password: data.get('password')
		};

		console.log(user);
	}
} satisfies Actions;
