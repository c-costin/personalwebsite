import type { LayoutServerLoad } from './$types';

export const ssr = false;
export const trailingSlash = 'always';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	return {
		session: locals.session.data,
		pathname: url.pathname
	};
};
