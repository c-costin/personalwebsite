<script lang="ts">
	// Import generals style
	import '$lib/styles/main.scss';

	// Import components
	import Navbar from '$lib/components/partials/Navbar.svelte';
	import Settings from '$lib/components/partials/Settings.svelte';
	import Footer from '$lib/components/partials/Footer.svelte';

	// Import assets
	import logoNormal from '$lib/images/logo_normal.webp';

	// Import module
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';

	// Import type
	import type { LayoutServerData } from './$types';

	// Declare export variable
	export let data: LayoutServerData;
	$: console.log(data.session);

	// Declare variable
	let theme: string = data.session.theme || '';
	let isPageLaoded: Boolean = false;
	let isSettingOpen: Boolean = false;
	let isDark: Boolean;

	// Check user prefers colors
	if (browser) {
		if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('dark');
			isDark = true;
		} else {
			document.body.classList.add('light');
			isDark = false;
		}
	}

	// Variables
	let changeFontSize: number;
	let changeInterlineSize: number;

	// Declare functions
	onMount(() => {
		setTimeout(() => {
			isPageLaoded = true;
		}, 1200);
	});
	const onChangeThemeLight = async () => {
		document.body.classList.toggle('light');
		document.body.classList.toggle('dark');
		data.session.theme = 'light';
		isDark = false;
	};
	const onChangeThemeDark = async () => {
		document.body.classList.toggle('dark');
		document.body.classList.toggle('light');
		data.session.theme = 'dark';
		isDark = true;
	};

	// Handle statement
	$: if (changeFontSize !== undefined) {
		document.body.dataset.font = `${changeFontSize}`;
	}
</script>

{#if !isPageLaoded}
	<div class="loader">
		<img src={logoNormal} alt="Logo de Costin Cadeau" class="loader__img" />
	</div>
{:else}
	<div class="container">
		<Navbar
			currentPage={data.pathname}
			openSetting={isSettingOpen}
			on:openSetting={() => (isSettingOpen = !isSettingOpen)}
		/>

		{#if isSettingOpen}
			<Settings
				bind:fontSize={changeFontSize}
				on:changeThemeLight={onChangeThemeLight}
				on:changeThemeDark={onChangeThemeDark}
				isDarkTheme={isDark}
			/>
		{/if}

		{#key data.pathname}
			<main class="main" transition:fade>
				<slot />
			</main>
		{/key}

		<Footer />
	</div>
{/if}

<style lang="scss">
	@use '../lib/styles/variables' as var;

	.main {
		min-height: 90vh;
	}

	.loader {
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: inherit;
		&__img {
			width: 156px;
			height: 156px;
			border-radius: 1rem;
			-webkit-animation: scale-up-center 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 150ms both;
			animation: scale-up-center 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 150ms both;
		}
	}

	@-webkit-keyframes scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
			opacity: 0.1;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
			opacity: 0.1;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
