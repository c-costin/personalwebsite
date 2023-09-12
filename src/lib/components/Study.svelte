<section class="study">
	<h2 class="study__title">Études</h2>
	<ul class="study__list">
		<li class="study__item">
			<h3 class="study__job">Développeur Web & Web Mobile</h3>
			<div class="study__desc">
				<p class="study__name"><em>O'Clock</em></p>
				<p class="study__date">
					<time datetime="2022-11">Novembre</time> à <time datetime="2023-05">Avril 2023</time>
				</p>
			</div>
		</li>
		<li class="study__item">
			<h3 class="study__job">Administrateur Réseau & Télécom</h3>
			<div class="study__desc">
				<p class="study__name"><em>Armée de l'Air</em></p>
				<p class="study__date">
					<time datetime="2017-02">Février</time> à <time datetime="2017-05">Mai 2017</time>
				</p>
			</div>
		</li>
		<li class="study__item">
			<h3 class="study__job">Bac Pro - Système Electronique et Numérique</h3>
			<div class="study__desc">
				<p class="study__name"><em>Lycée Touchard Wahsington</em></p>
				<p class="study__date"><time datetime="2017">2016</time></p>
			</div>
		</li>
	</ul>
</section>

<style lang="scss">
	@import '../font/fonts.css';
	@import '../styles/variables';

	.study {
		margin-block: 4rem 7rem;
		margin-inline: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		&__title {
			font-family: $font-montserrat-semi; 
		}
		&__list {
			display: flex;
			flex-direction: column;
			gap: 1.25rem;
			list-style: none;
		}
		&__item {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}
		&__job {
			font-size: 1rem;
		}
		&__desc {
			display: flex;
			justify-content: space-between;
			font-size: 0.9rem;
			font-family: $font-montserrat-italic;
		}
	}

	@media (prefers-color-scheme: dark) {
		// .study__title {
		// 	color: $color-secondary;
		// }
	}
</style>
