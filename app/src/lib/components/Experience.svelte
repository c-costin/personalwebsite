<section class="experience">
	<h2 class="experience__title">Expériences</h2>
	<ul class="experience__list">
		<li class="experience__item">
			<h3 class="experience__job">Stage - Développeur web</h3>
			<div class="experience__desc">
				<p class="experience__name"><em>GaraLib</em></p>
				<p class="experience__date"><time datetime="2022-05">Mai 2023</time></p>
			</div>
		</li>
		<li class="experience__item">
			<h3 class="experience__job">Freelance - Développeur web</h3>
			<div class="experience__desc">
				<p class="experience__name"><em>Cadeau des Toits</em></p>
				<p class="experience__date"><time datetime="2021-05">Mai</time> à <time datetime="2021-06">Juin 2022</time></p>
			</div>
		</li>
		<li class="experience__item">
			<h3 class="experience__job">Administrateur réseau et télécom</h3>
			<div class="experience__desc">
				<p class="experience__name"><em>Armée de l'air</em></p>
				<p class="experience__date">
					<time datetime="2017">2017</time> à <time datetime="2021">2021</time>
				</p>
			</div>
		</li>
	</ul>
</section>

<style lang="scss">
	@use '../styles/variables' as var;

	.experience {
		margin-top: 4rem;
		margin-inline: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		&__title {
			font-family: var.$font-montserrat-semi;
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
			font-family: var.$font-montserrat-italic;
		}
	}
</style>
