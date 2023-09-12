<section class="project">
	<h2 class="project__title">Projets</h2>
	<ul class="project__list">
		<li class="project__item">
			<h3 class="project__name">eCommerce - C-Studio (en cours)</h3>
			<!-- <a href="/#" class="project__link">voir</a> -->
		</li>
		<li class="project__item">
			<h3 class="project__name">Site web - Personnel</h3>
			<a
				href="https://github.com/c-costin/project-personal-website"
				target="_blank"
				rel="noopener noreferrer"
				class="project__link">voir</a
			>
		</li>
		<li class="project__item">
			<h3 class="project__name">API - GaraLib</h3>
			<a
				href="https://dwwm.back.costincadeau.fr/api/doc"
				target="_blank"
				rel="noopener noreferrer"
				class="project__link">voir</a
			>
		</li>
		<!-- <li class="project__item">
			<h3 class="project__name">Site web - Cadeau des Toits</h3>
			<a href="https://www.cadeaudestoits.fr/" target="_blank" rel="noopener noreferrer" class="project__link">voir</a>
		</li> -->
	</ul>
</section>

<style lang="scss">
	@import '../font/fonts.css';
	@import '../styles/variables';

	.project {
		margin-top: 12rem;
		margin-bottom: 7rem;
		padding-inline: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		&__title {
			font-family: $font-montserrat-semi;
		}
		&__list {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			list-style: none;
		}
		&__item {
			display: flex;
			justify-content: space-between;
			&:hover {
				color: #0b47bf;
				text-decoration: underline;
			}
		}
		&__name {
			font-size: 1rem;
			font-family: $font-montserrat-italic;
		}
		&__link {
			color: #0b47bf;
		}
	}

	@media screen and (min-width: 640px) {
		.project {
			margin-block: 8rem;
		}
	}

	@media (prefers-color-scheme: dark) {
		// .project__title {
		// 	color: $color-secondary;
		// }
	}
</style>
