<script>
	import '$lib/fonts/fonts.css';
	import '../app.scss';
	import { onMount } from 'svelte';
	import imgMe from '$lib/images/me.jpg';
	import logo256 from '$lib/images/logo256x256.png';
	import logo20 from '$lib/images/logo20x20.png';
	import iconApple from '$lib/icons/apple-touch-icon.png';
	import favicon32 from '$lib/icons/favicon-32x32.png';
	import favicon16 from '$lib/icons/favicon-16x16.png';
	import manifest from '$lib/icons/site.webmanifest';

	let isPageLaoded = false;
	onMount(() => {
		setTimeout(() => {
			isPageLaoded = true;
		}, 1200);
	});
</script>

<svelte:head>
	<meta name="description" content="Je suis un développeur web & web mobile, je code en frontend ou en backend. Je suis basé à Le Mans">
	<meta name="keywords" content="développeur, web, frontend, backend, full-stack, créateur, site, conception, application">
	<link rel="canonical" href="https://costincadeau.fr"/>
	<link rel="preload" href="{imgMe}">
	<link rel="preload" href="{logo256}">
	<link rel="preload" href="{logo20}">
	<link rel="apple-touch-icon" sizes="180x180" href="{iconApple}">
	<link rel="icon" type="image/png" sizes="32x32" href="{favicon32}">
	<link rel="icon" type="image/png" sizes="16x16" href="{favicon16}">
	<link rel="manifest" href="{manifest}">
	<title>Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

{#if !isPageLaoded}
	<div class="loader">
		<img src="{logo256}" alt="Logo de Costin Cadeau" class="loader__img" />
	</div>
{:else}
    <slot />
{/if}

<style lang="scss">
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
		background: $neutral-white;
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
</style>
