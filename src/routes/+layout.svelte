<script>
	import '../fonts.css';
	import '../app.scss';
	import { onMount } from 'svelte';
	let isPageLaoded = false;
	onMount(() => {
		setTimeout(() => {
			isPageLaoded = true;
		}, 1500);
	});
</script>

{#if !isPageLaoded}
	<div class="loader">
		<img src="./images/logo256x256.png" alt="Logo de Costin Cadeau" class="loader__img" />
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
			-webkit-animation: scale-up-center 700ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 200ms both;
			animation: scale-up-center 700ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 200ms both;
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
