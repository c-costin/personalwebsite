<script>
	import '$lib/styles/main.scss';

	import { fade } from 'svelte/transition';

	let isThemeDark = false;

	export let fontSize = 15;
	export let interlineSize = 1.5;

	const reset = () => {
		fontSize = 15;
		interlineSize = 1.5;
	};
</script>

<aside class="setting" transition:fade>
	<h2 class="setting__title">Préférences</h2>
	<div class="setting__separator" />
	<div class="setting__action">
		<div class="setting__row">
			<h3 class="setting__subTitle">Taille du texte</h3>
			<p>{fontSize}</p>
		</div>
		<input class="setting__input" type="range" bind:value={fontSize} min="12" max="24" step="2" />
	</div>
	<div class="setting__action">
		<div class="setting__row">
			<h3 class="setting__subTitle">Taille de l'interlignes</h3>
			<p>{interlineSize}</p>
		</div>
		<input
			class="setting__input"
			type="range"
			bind:value={interlineSize}
			min="1.25"
			max="2"
			step="0.25"
		/>
	</div>
	<div class="setting__action">
		<div class="setting__row">
			<h3 class="setting__subTitle">Theme</h3>
		</div>
		<div class="setting__themeChoice">
			<button
				on:click={() => (isThemeDark = false)}
				class="setting__btnTheme {!isThemeDark ? 'setting__btnTheme-is-active' : ''}"
			>
				clair
			</button>
			<div class="setting__divisor" />
			<button
				on:click={() => (isThemeDark = true)}
				class="setting__btnTheme {isThemeDark ? 'setting__btnTheme-is-active' : ''}"
			>
				sombre
			</button>
		</div>
	</div>
	<button class="setting__reset" on:click={reset}> Remettre par défaut </button>
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
		background-color: rgba(232, 229, 228, 0.45);
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
			background: var.$color-neutral-secondary;
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
			background: var.$color-neutral-secondary;
		}
		&__btnTheme {
			padding-block: 0.25rem;
			width: 50%;
			font-family: var.$font-montserrat;
			border-radius: 0.5rem;
			background: none;
			&-is-active {
				color: var.$color-neutral-primary;
				background: #466FC2;
			}
		}
		&__reset {
			margin-top: 1rem;
			margin-inline: 0.5rem;
			padding-block: 0.35rem;
			border-radius: 0.75rem;
			font-family: var.$font-montserrat-semi;
			background: #fff;
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
</style>
