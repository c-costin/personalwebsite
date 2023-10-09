import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	// Action for save user setting "theme"
	selectTheme: async ({ request, locals }) => {
		const form = await request.formData();
		const themeData: string = form.get('theme') as string;
		await locals.session.update(({ theme }) => ({ theme: themeData }));
	},

	// Action for save user setting "font-size"
	selectFontSize: async ({ request, locals }) => {
		const form = await request.formData();
		const fontSizeData: number = Number(form.get('fontSize'));
		await locals.session.update(({ fontSize }) => ({ fontSize: fontSizeData }));
	},

	// Action for reset default setting and delete session
	resetSettings: async ({ locals, url }) => {
		await locals.session.destroy();
		throw redirect(302, url.pathname);
	}
};
