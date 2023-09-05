<script>
	import '../app.scss';
	export let isActive = '';
</script>

<nav class="navbar" data-sveltekit-replacestate>
	<a href="/" class="navbar__link {isActive === 'home' ? 'navbar__link-is-active' : ''}">Accueil</a>
	<a href="/profil" class="navbar__link {isActive === 'profil' ? 'navbar__link-is-active' : ''}">Profil</a>
	<a href="/contact" class="navbar__link {isActive === 'contact' ? 'navbar__link-is-active' : ''}">Contact</a>
</nav>

<style lang="scss">
	.navbar {
		position: fixed;
		top: 1.5rem;
		left: 50%;
		margin-inline: auto;
		padding: 0.45rem 0.6rem;
		display: flex;
		gap: 0.25rem;
		border-radius: 24px;
		box-shadow: $main-shadow;
		background: $transparent-neutral-light-gray;
		backdrop-filter: blur(1.5px);
		-webkit-backdrop-filter: blur(1.5px);
		transform: translateX(-50%);
		&__link {
			padding: 0.4rem 0.55rem;
			width: 5rem;
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
