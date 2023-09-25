import type { Actions } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	return {
		session: locals.session.data,
		pathname: url.pathname
	};
};

// export const actions: Actions = {
// 	editTheme: async ({ request, locals }) => {
// 		const form = await request.formData();
// 		const userTheme = form.get('theme');
// 		await locals.session.update(({ theme }) => ({ theme: userTheme }));
// 		return {};
// 	}
// };
