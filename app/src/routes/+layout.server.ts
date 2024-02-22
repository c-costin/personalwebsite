import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, cookies }) => {
	return {
		pathname: url.pathname,
		userSaveFontSize: Number(cookies.get('fontSize')) || 16,
		userSaveTheme: cookies.get('theme') || null
	};
};
