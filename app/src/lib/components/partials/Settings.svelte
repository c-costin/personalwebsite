<script lang="ts">
	// Import generals style
	import '$lib/styles/main.scss';

	// Import modules
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	// Declare export variables
	export let isDarkTheme: Boolean = false;
	export let fontSize: Number = 16;
	export let interlineSize: Number = 1.5;

	const dispatch = createEventDispatcher();

	const onChangeValue = (e: SubmitEvent) => {
		console.log(e.target.value);
	}
	const reset = () => {
		fontSize = 16;
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
		<form method="post" on:change={onChangeValue}>
			<input
				class="setting__input"
				type="range"
				name="interlineSize"
				bind:value={interlineSize}
				min="1.25"
				max="2"
				step="0.25"
			/>
		</form>
	</div>
	<div class="setting__action">
		<div class="setting__row">
			<h3 class="setting__subTitle">Theme</h3>
		</div>
		<div class="setting__themeChoice">
			<button
				on:click={() => dispatch('changeThemeLight')}
				class="setting__btnTheme {!isDarkTheme ? 'setting__btnTheme-isActive' : ''}"
			>
				clair
			</button>
			<div class="setting__divisor" />
			<button
				on:click={() => dispatch('changeThemeDark')}
				class="setting__btnTheme {isDarkTheme ? 'setting__btnTheme-isActive' : ''}"
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
