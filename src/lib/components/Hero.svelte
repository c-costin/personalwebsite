<header class="hero">
	<h1 class="hero__title">
		Bonjour, je suis Costin, un <span class="hero__mark">artisan du web</span>. Je conçois et
		développe des applications pour le web, de manière <span class="hero__mark">responsable</span> et
		<span class="hero__mark">accessible</span>.
	</h1>
</header>

<style lang="scss">
	@import '../font/fonts.css';
	@import '../styles/variables';

	.hero {
		margin-top: 14rem;
		padding-inline: 1.5rem;
		// min-height: 40vh;
		&__title {
			font-family: $font-montserrat-semi;
		}
		&__mark {
			color: #0B47BF;
		}
	}
</style>
