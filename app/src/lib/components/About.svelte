<script>
	import me from '$lib/images/me.webp';
</script>

<section class="about">
	<img src={me} alt="Photographie de Costin Cadeau" class="about__img" />
	<div class="about__desc">
		<p class="about__text">
			Hello, World ! Je suis Costin Cadeau développeur web et j’aime coder de chaque côté de la
			requête !
		</p>
		<p class="about__text">
			Pourquoi un artisan du web ? J’aime faire un parallèle avec l’artisanat, ce sont des métiers
			passionnants, créatifs et uniques. Le développement web permet cela. Qu’on soit développeur
			Front-End ou développeur Back-End, chaque projet est unique !
		</p>
		<p class="about__text">
			Pour ma petite histoire, je suis un passionné d’informatique depuis mon enfance. J’ai étudié
			et travaillé dans le domaine de l'informatique comme administrateur réseau et télécom au sein
			de l’Armée de l’Air et l’Espace. Suite à ce parcours, je me suis reconvertis dans le
			développement web. Pour cette nouvelle aventure, j'ai choisi l'école O’Clock pour me former.
		</p>
		<p class="about__resume">
			mon cv :
			<a
				href="/documents/costin-cadeau_cv_l.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="about__link"
			>
				version clair
			</a>
			|
			<a
				href="/documents/costin-cadeau_cv_d.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="about__link"
			>
				version sombre
			</a>
		</p>
	</div>
</section>

<style lang="scss">
	@use '../styles/variables' as var;

	.about {
		margin-top: 8rem;
		padding-inline: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		&__img {
			width: 196px;
			height: 212px;
			border-radius: 0.5rem;
			object-fit: cover;
		}
		&__desc {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		&__text {
			line-height: 1.85rem;
		}
		&__resume {
			margin-top: 0.5rem;
			font-family: var.$font-montserrat-italic;
			align-self: flex-end;
		}
		&__link {
			font-family: var.$font-montserrat-semi-italic;
			color: var.$color-blue;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	:global(body.light) {
		.about {
			&__link {
				color: var.$color-blue;
			}
		}
	}

	:global(body.dark) {
		.about {
			&__link {
				color: var.$color-yellow;
			}
		}
	}

	@media (prefers-color-scheme: light) {
		.about {
			&__link {
				color: var.$color-blue;
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.about {
			&__link {
				color: var.$color-yellow;
			}
		}
	}
</style>
