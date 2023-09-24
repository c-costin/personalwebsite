<header class="hero">
	<h1 class="hero__title">
		Bonjour, je suis Costin, un <span class="hero__mark">artisan du web</span>. Je conçois et
		développe des applications pour le web, de manière <span class="hero__mark">responsable</span> et
		<span class="hero__mark">accessible</span>.
	</h1>
</header>

<style lang="scss">
	@use '../styles/variables' as var;

	.hero {
		margin-top: 12rem;
		padding-inline: 1.5rem;
		&__title {
			font-family: var.$font-montserrat-semi;
		}
		&__mark {
			color: var.$color-blue;
		}
	}

	@media (prefers-color-scheme: dark) {
		.hero {
			&__mark {
				color: var.$color-yellow;
			}
		}
	}
</style>
