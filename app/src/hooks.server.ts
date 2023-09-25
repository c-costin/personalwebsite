import { handleSession } from 'svelte-kit-cookie-session';

export const handle = handleSession(
	{
		init: () => ({ theme: undefined, fontSize: undefined, interlineSize: undefined }),
		saveUninitialized: true,
		expires: 90,
		expires_in: 'days',
		secret: [
			{
				id: 2,
				secret: 'X2i5tj07c93gbyVtdXMb5F6vc0sEfe9D'
			},
			{
				id: 1,
				secret: 'aP3PnY82PiYw1n0d1wtoApJvEEJYF5tf'
			}
		]
	},
	async ({ event, resolve }) => {
		if (event.request.method === 'POST') {
			const form = await event.request.formData();

			const themeData: string = form.get('theme') as string;
			const fontSizeData: number = Number(form.get('fontSize') as string);
			const interlineSizeData: number = Number(form.get('interlineSize') as string);

			if (themeData) {
				await event.locals.session.update(({ theme }) => ({ theme: themeData }));
			}
			if (fontSizeData) {
				await event.locals.session.update(({ fontSize }) => ({ fontSize: fontSizeData }));
			}
			if (interlineSizeData) {
				await event.locals.session.update(({ interlineSize }) => ({
					interlineSize: interlineSizeData
				}));
			}
		}

		return resolve(event);
	}
);
