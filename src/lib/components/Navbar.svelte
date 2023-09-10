<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let isActive = '';
	export let openSetting = false;
</script>

<nav class="navbar">
	<a
		href="/"
		class="navbar__link {isActive === 'home' ? 'navbar__link-is-active' : ''}"
		data-sveltekit-replacestate>Accueil</a
	>
	<a
		href="/profil"
		class="navbar__link {isActive === 'profil' ? 'navbar__link-is-active' : ''}"
		data-sveltekit-replacestate>Profil</a
	>
	<a
		href="/contact"
		class="navbar__link {isActive === 'contact' ? 'navbar__link-is-active' : ''}"
		data-sveltekit-replacestate>Contact</a
	>
	<div class="navbar__separator" />
	<button
		class="navbar__setting {openSetting ? 'navbar__link-is-active' : ''}"
		on:click={() => dispatch('openSetting')}
	>
		<svg
			width="24px"
			height="24px"
			stroke-width="1"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 15a3 3 0 100-6 3 3 0 000 6z"
				stroke="#000000"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z"
				stroke="#000000"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			/></svg
		>
	</button>
</nav>

<style lang="scss">
	@import '../font/fonts.css';
	@import '../styles/variables';

	.navbar {
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
		box-shadow: $shadow-primary;
		background: $color-neutral-third-transparent;
		backdrop-filter: blur(3.8px);
		-webkit-backdrop-filter: blur(3.8px);
		border: 1px solid rgba(226, 226, 226, 0.24);
		transform: translateX(-50%);
		&__link {
			padding-block: 0.25rem;
			width: 4.75rem;
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
			background: $color-neutral-secondary;
		}
		&__setting {
			padding: 0.25rem 0.275rem;
			border-radius: 14px;
			background: none;
		}
		&__link-is-active {
			box-shadow: $shadow-secondary;
			background: $color-neutral-primary;
		}
	}
</style>
