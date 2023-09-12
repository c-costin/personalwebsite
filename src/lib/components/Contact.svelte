<section class="contact">
	<h2 class="contact__title">Travaillons ensemble.</h2>
	<a href="mailto:c%6f&#110;ta&#99;&#116;&#64;&#99;&#111;&#115;&#116;&#105;&#110;c&#97;d%65a&#117;%2e%66%72">
		<h3 class="contact__subtitle"><span class="contact__mark">Prenez contact</span>.</h3>
	</a>
</section>

<style lang="scss">
	@import '../font/fonts.css';
	@import '../styles/variables';

	.contact {
		margin-block: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: $font-montserrat-semi;
		&__title {
			font-size: 1.6rem;
		}
		&__subtitle {
			font-size: 1.5rem;
		}
		&__mark {
			color: #0B47BF;
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
