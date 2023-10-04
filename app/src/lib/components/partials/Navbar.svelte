<script lang="ts">
	// Import generals style
	import '$lib/styles/main.scss';

	// Import module
	import { createEventDispatcher } from 'svelte';

	// Declare export variable
	export let currentPage: String = '';
	export let openSetting: Boolean = false;

	// Declate function
	const dispatch: Function = createEventDispatcher();
</script>

<nav class="navbar">
	<a
		href="/"
		class="navbar__link {currentPage === '/' ? 'navbar__link-isActive' : ''}"
		data-sveltekit-replacestate
	>
		Accueil
	</a>
	<a
		href="/profil"
		class="navbar__link {currentPage === '/profil' ? 'navbar__link-isActive' : ''}"
		data-sveltekit-replacestate
	>
		Profil
	</a>
	<a
		href="/contact"
		class="navbar__link {currentPage === '/contact' ? 'navbar__link-isActive' : ''}"
		data-sveltekit-replacestate
	>
		Contact
	</a>
	<div class="navbar__separator" />
	<button
		class="navbar__setting {openSetting ? 'navbar__link-isActive' : ''}"
		on:click={() => dispatch('openSetting')}
		aria-label="Bouton pour ouvrir les paramètres"
	>
		<svg
			width="24px"
			height="24px"
			stroke-width="1"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="navbar__icon"
				d="M12 15a3 3 0 100-6 3 3 0 000 6z"
				stroke="#000000"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="navbar__icon"
				d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z"
				stroke="#000000"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</nav>

<style lang="scss">
	@use '../../styles/variables' as var;

	.navbar {
		z-index: 99999;
		position: fixed;
		top: 1.5rem;
		left: 50%;
		margin-inline: auto;
		padding: 0.25rem 0.375rem;
		height: fit-content;
		display: flex;
		gap: 0.25rem;
		align-items: center;
		border-radius: 24px;
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		transform: translateX(-50%);
		&__link {
			padding-block: 0.15rem;
			width: 5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 14px;
			font-size: 0.9rem;
		}
		&__separator {
			margin-inline: 0.25rem;
			width: 1px;
			height: 1rem;
			border-radius: 1rem;
			background: var.$color-black;
		}
		&__setting {
			padding: 0.25rem;
			border-radius: 100%;
			background: none;
		}
	}

	:global(body.light) {
		.navbar {
			background: rgba(232, 229, 228, 0.45);
			&__separator {
				background: var.$color-black;
			}
			&__icon {
				stroke: var.$color-black;
			}
			&__link-isActive {
				background: var.$color-white;
			}
		}
	}

	:global(body.dark) {
		.navbar {
			background: rgba(64, 64, 64, 0.45);
			&__separator {
				background: var.$color-white;
			}
			&__icon {
				stroke: var.$color-white;
			}
			&__link-isActive {
				background: var.$color-black;
			}
		}
	}

	@media (prefers-color-scheme: light) {
		.navbar {
			background: rgba(232, 229, 228, 0.45);
			&__separator {
				background: var.$color-black;
			}
			&__icon {
				stroke: var.$color-black;
			}
			&__link-isActive {
				background: var.$color-white;
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.navbar {
			background: rgba(64, 64, 64, 0.45);
			&__separator {
				background: var.$color-white;
			}
			&__icon {
				stroke: var.$color-white;
			}
			&__link-isActive {
				background: var.$color-black;
			}
		}
	}
</style>
