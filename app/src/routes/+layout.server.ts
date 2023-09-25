import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	return {
		session: locals.session.data,
		pathname: url.pathname
	};
};
