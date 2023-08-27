<script>
	import '../app.scss';
</script>

<section class="project">
	<h2 class="project__title text-mark">Projets</h2>
	<ul class="project__list">
		<li class="project__item">
			<h3 class="project__name">C-Studio (en cours)</h3>
			<a href="/#" class="project__link">voir</a>
		</li>
		<li class="project__item">
			<h3 class="project__name">Site web personnel (portofolio)</h3>
			<a href="/#" class="project__link">voir</a>
		</li>
		<li class="project__item">
			<h3 class="project__name">GaraLib (API)</h3>
			<a href="https://dwwm.back.costincadeau.fr/api/doc" target="_blank" rel="noopener noreferrer" class="project__link">voir</a>
		</li>
		<li class="project__item">
			<h3 class="project__name">Cadeau des Toits (Site vitrine)</h3>
			<a href="https://www.cadeaudestoits.fr/" target="_blank" rel="noopener noreferrer" class="project__link">voir</a>
		</li>
	</ul>
</section>

<style lang="scss">
	.project {
		margin-top: 12rem;
		margin-bottom: 6rem;
		padding-inline: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		&__title {
			font-family: $montserrat-semibold;
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
				text-decoration: underline;
			}
		}
		&__name {
      font-size: 1rem;
			font-family: $montserrat-italic;
		}
	}
</style>
