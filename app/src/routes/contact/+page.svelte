<svelte:head>
	<title>Contact - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<section class="contact">
	<h2 class="contact__title">Travaillons ensemble.</h2>
	<a
		href="mailto:c%6f&#110;ta&#99;&#116;&#64;&#99;&#111;&#115;&#116;&#105;&#110;c&#97;d%65a&#117;%2e%66%72"
	>
		<h3 class="contact__subtitle"><span class="contact__mark">Prenez contact</span>.</h3>
	</a>
</section>

<style lang="scss">
	@use '../../lib/styles/variables' as var;

	.contact {
		height: 90dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: var.$font-montserrat-semi;
		&__title {
			font-size: 1.6rem;
		}
		&__subtitle {
			font-size: 1.5rem;
		}
		&__mark {
			color: var.$color-blue;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.contact {
			&__mark {
				color: var.$color-yellow;
			}
		}
	}
</style>
