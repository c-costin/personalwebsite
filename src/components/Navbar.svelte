<script>
	import '../app.scss';
	export let isActive = '';
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
</nav>

<style lang="scss">
	.navbar {
		position: fixed;
		top: 1.5rem;
		left: 50%;
		margin-inline: auto;
		padding: 0.3rem 0.375rem;
		display: flex;
		gap: 0.25rem;
		border-radius: 24px;
		background: rgba(226, 226, 226, 0.85);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3.8px);
		-webkit-backdrop-filter: blur(3.8px);
		border: 1px solid rgba(226, 226, 226, 0.24);
		transform: translateX(-50%);
		&__link {
			padding: 0.25rem 0.45rem;
			width: 4.75rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 14px;
			font-size: 0.9rem;
		}
		&__link-is-active {
			border-radius: 14px;
			box-shadow: $second-shadow;
			background: $transparent-neutral-white;
		}
	}
</style>
