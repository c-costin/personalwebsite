import { handleSession } from 'svelte-kit-cookie-session';
import { SECRET_SESSION_1, SECRET_SESSION_2 } from '$env/static/private';

export const handle = handleSession(
	{
		init: () => ({ fontSize: 16 }),
		expires: 90,
		expires_in: 'days',
		secret: [
			{
				id: 2,
				secret: SECRET_SESSION_2
			},
			{
				id: 1,
				secret: SECRET_SESSION_1
			}
		]
	},
	async ({ event, resolve }) => {
		return resolve(event);
	}
);
