<script lang="ts">
	import { goto } from '$app/navigation';

	// Import generals style
	import '$lib/styles/main.scss';

	// Import modules
	import { fade } from 'svelte/transition';

	
	// Exporting variables
	export let isDarkTheme: Boolean = false;

	// Variables
	const cookies = Object.fromEntries(new URLSearchParams(document.cookie.replace(/; /g, '&')));
	let fontSize: number = Number(cookies.fontSize) || 16;

	// Functions
	const changeFontSizeIntoDom = () => {
		document.body.dataset.font = `${fontSize}`;
		document.cookie = `fontSize=${fontSize};domain=costincadeau.fr;max-age=${60*60*24*90};SameSite=strict;Secure;`;
	};

	const changeThemeLight = async () => {
		document.body.classList.add('light');
		document.body.classList.remove('dark');
		isDarkTheme = false;
		document.cookie = `theme=light;domain=costincadeau.fr;max-age=${60*60*24*90};SameSite=strict;Secure;`;
	};

	const changeThemeDark = async () => {
		document.body.classList.add('dark');
		document.body.classList.remove('light');
		isDarkTheme = true;
		document.cookie = `theme=dark;domain=costincadeau.fr;max-age=${60*60*24*90};SameSite=strict;Secure;`;
	};

	const resetSetting = () => {
		document.cookie = `theme=light;domain=costincadeau.fr;max-age=0;SameSite=strict;Secure;`;
		document.cookie = `theme=dark;domain=costincadeau.fr;max-age=0;SameSite=strict;Secure;`;

		if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('light');
			document.body.classList.remove('dark');
			document.body.dataset.theme = 'light';
			isDarkTheme = false;
		} else {
			document.body.classList.add('dark');
			document.body.classList.toggle('light');
			document.body.dataset.theme = 'dark';
			isDarkTheme = true;
		}

		document.cookie = `fontSize=${fontSize};domain=costincadeau.fr;max-age=0;SameSite=strict;Secure;`;
		fontSize = 16;
		document.body.dataset.font = `${fontSize}`;
	}
</script>

<svelte:body data-font={fontSize} />

<aside class="setting" transition:fade>
	<h2 class="setting__title">Préférences</h2>
	<div class="setting__separator" />
	<div class="setting__action">
		<div class="setting__row">
			<h3 class="setting__subTitle">Taille du texte</h3>
			<p>{fontSize}</p>
		</div>
		<input
			class="setting__input"
			type="range"
			bind:value={fontSize}
			on:change={changeFontSizeIntoDom}
			min="12"
			max="24"
			step="2"
		/>
	</div>
	<div class="setting__action">
		<div class="setting__row">
			<h3 class="setting__subTitle">Theme</h3>
		</div>
		<div class="setting__themeChoice">
			<button
				on:click={changeThemeLight}
				class="setting__btnTheme {!isDarkTheme ? 'setting__btnTheme-isActive' : ''}"
			>
				clair
			</button>
			<div class="setting__divisor" />
			<button
				on:click={changeThemeDark}
				class="setting__btnTheme {isDarkTheme ? 'setting__btnTheme-isActive' : ''}"
			>
				sombre
			</button>
		</div>
	</div>
	<button class="setting__reset" on:click={resetSetting}> Remettre par défaut </button>
</aside>

<style lang="scss">
	@use '../../styles/variables' as var;

	.setting {
		z-index: 999999;
		position: fixed;
		top: 5rem;
		left: 50%;
		padding: 1rem;
		width: 296px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		border-radius: 0.5rem;
		background: rgba(232, 229, 228, 0.45);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		transform: translateX(-50%);
		&__title {
			padding-inline: 0.5rem;
			font-size: 1.2rem;
			border: none;
			background: none;
		}
		&__separator {
			margin-block: 0.5rem;
			width: 100%;
			height: 1px;
			border-radius: 1rem;
			background: var.$color-black;
		}
		&__action {
			padding: 1.5rem 0.75rem;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-items: center;
		}
		&__row {
			width: 100%;
			display: flex;
			gap: 1.25rem;
			justify-content: space-between;
		}
		&__subTitle {
			font-family: var.$font-montserrat;
			font-size: 1rem;
		}
		&__input {
			width: 100%;
		}
		&__themeChoice {
			width: 100%;
			display: flex;
			align-items: center;
		}
		&__divisor {
			margin-inline: 0.5rem;
			width: 1.5px;
			height: 1.5rem;
			border-radius: 1rem;
			background: var.$color-black;
		}
		&__btnTheme {
			padding-block: 0.25rem;
			width: 50%;
			border-radius: 0.5rem;
			background: none;
			font-family: var.$font-montserrat-semi;
			&-isActive {
				color: var.$color-white;
				background: var.$color-blue;
			}
		}
		&__reset {
			margin-top: 1rem;
			margin-inline: 0.5rem;
			padding-block: 0.35rem;
			border-radius: 0.75rem;
			color: var.$color-white;
			background: var.$color-blue;
			font-family: var.$font-montserrat-semi;
		}
	}

	@media screen and (min-width: 596px) {
		.setting {
			width: 296px;
		}
	}

	@media screen and (min-width: 768px) {
		.setting {
			width: 396px;
		}
	}

	:global(body.light) {
		.setting {
			background: rgba(232, 229, 228, 0.45);
			&__divisor {
				background: var.$color-black;
			}
			&__btnTheme {
				&-isActive {
					color: var.$color-white;
					background: var.$color-blue;
				}
			}
			&__reset {
				color: var.$color-white;
				background: var.$color-blue;
			}
		}
	}

	:global(body.dark) {
		.setting {
			background: rgba(64, 64, 64, 0.45);
			&__divisor {
				background: var.$color-white;
			}
			&__btnTheme {
				&-isActive {
					color: var.$color-black;
					background: var.$color-yellow;
				}
			}
			&__reset {
				color: var.$color-black;
				background: var.$color-yellow;
			}
		}
	}

	@media (prefers-color-scheme: light) {
		.setting {
			background: rgba(232, 229, 228, 0.45);
			&__divisor {
				background: var.$color-black;
			}
			&__btnTheme {
				&-isActive {
					color: var.$color-white;
					background: var.$color-blue;
				}
			}
			&__reset {
				color: var.$color-white;
				background: var.$color-blue;
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.setting {
			background: rgba(64, 64, 64, 0.45);
			&__divisor {
				background: var.$color-white;
			}
			&__btnTheme {
				&-isActive {
					color: var.$color-black;
					background: var.$color-yellow;
				}
			}
			&__reset {
				color: var.$color-black;
				background: var.$color-yellow;
			}
		}
	}
</style>
