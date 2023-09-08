<script>
	import '../app.scss';
	import iconPlus from '$lib/icons/plus.svg';
	import iconMinus from '$lib/icons/minus.svg';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	let fontSize = 14;
	let interlineSize = 1.5;
</script>

<aside class="setting" transition:fade>
	<div class="setting__container">
		<h2 class="setting__title">Confort de lecture et accessibilité</h2>
		<div class="setting__separator" />
		<div class="setting__row">
			<h3 class="setting__subTitle">Taille du texte</h3>
			<div class="setting__action">
				<button class="setting__actionBtn" on:click={() => (fontSize += 0.5)}>
					<svg
						width="27px"
						height="27px"
						stroke-width="2"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="setting__actionIcon"
							d="M6 12h6m6 0h-6m0 0V6m0 6v6"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<p class="setting__actionValue" style="font-size: {fontSize};">{fontSize}</p>
				<button class="setting__actionBtn" on:click={() => (fontSize -= 0.5)}>
					<svg
						width="27px"
						height="27px"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						color="#000000"
					>
						<path
							class="setting__actionIcon"
							d="M6 12h12"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="setting__row">
			<h3 class="setting__subTitle">Espacement entre les lignes</h3>
			<div class="setting__action">
				<button class="setting__actionBtn" on:click={() => (interlineSize += 0.25)}>
					<svg
						width="27px"
						height="27px"
						stroke-width="2"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="setting__actionIcon"
							d="M6 12h6m6 0h-6m0 0V6m0 6v6"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<p>{interlineSize}</p>
				<button class="setting__actionBtn" on:click={() => (interlineSize -= 0.25)}>
					<img
						class="setting__actionIcon"
						src={iconMinus}
						alt="Icon diminuer l'espace entre les lignes"
					/>
				</button>
			</div>
		</div>
		<div class="setting__row">
			<h3 class="setting__subTitle">Theme</h3>
			<div class="setting__action">
				<button>clair</button>
				<p>|</p>
				<button>sombre</button>
			</div>
		</div>
	</div>
	<button class="setting__btn" on:click={() => dispatch('closeSetting')}> Fermer </button>
</aside>

<style lang="scss">
	.setting {
		position: absolute;
		top: 0;
		left: 0;
		padding: 1.5rem;
		width: 100%;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		background: $neutral-white;
		&__container {
			width: 100%;
		}
		&__title {
			padding-inline: 0.5rem;
			font-size: 1.4rem;
			border: none;
			background: none;
		}
		&__separator {
			margin-block: 0.5rem;
			width: 100%;
			height: 2px;
			background: $neutral-black;
		}
		&__row {
			padding: 2rem 1rem;
			display: flex;
			gap: 1.25rem;
			flex-direction: column;
			justify-content: center;
		}
		&__subTitle {
			font-family: $montserrat-semibold;
			font-size: 1.2rem;
		}
		&__action {
			width: fit-content;
			display: flex;
			gap: 1rem;
			align-items: center;
		}
		&__actionBtn {
			width: 28px;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1.5px solid $primary-blue;
			border-radius: 100%;
			background: none;
		}
		&__actionIcon {
			stroke: $primary-blue;
		}
		&__btn {
			padding: 0.25rem 0.75rem;
			font-family: $montserrat-semibold;
			font-size: 1.2rem;
			border: 2.5px solid $neutral-black;
			border-radius: 0.75rem;
			background: none;
		}
	}
</style>
