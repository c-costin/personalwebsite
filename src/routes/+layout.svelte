<script>
	// Import style
	import '$lib/styles/app.scss';

	// Import files
	import me from '$lib/img/me.jpg';
	import logoSmall from '$lib/img/logo_small.png';
	import logoNormal from '$lib/img/logo_normal.png';

	// Import modules
	import { onMount } from 'svelte';

	// Declare variables
	let isPageLaoded = false;

	// Declare functions
	onMount(() => {
		setTimeout(() => {
			isPageLaoded = true;
		}, 1200);
	});
</script>

<svelte:head>
	<link rel="preload" href={me} />
	<link rel="preload" href={logoSmall} />
	<link rel="preload" href={logoNormal} />
</svelte:head>

{#if !isPageLaoded}
	<div class="loader">
		<img src={logoNormal} alt="Logo de Costin Cadeau" class="loader__img" />
	</div>
{:else}
	<slot />
{/if}

<style lang="scss">
	@import '../lib/font/fonts.css';
	@import '../lib/styles/variables';

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
		background: $color-neutral-primary;
		&__img {
			width: 8rem;
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

	@media (prefers-color-scheme: dark) {
		// .loader {
		// 	background: $color-neutral-secondary;
		// }
	}
</style>
