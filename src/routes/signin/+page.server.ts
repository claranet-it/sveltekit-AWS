import type { Actions } from './$types';

export const actions = {
	signIn: async ({ request }) => {
		const data = await request.formData();
		console.log('*****Data: ', data);
		return { signin: false };
	}
} satisfies Actions;
