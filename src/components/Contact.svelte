<script>
	import '../app.scss';
</script>

<section class="contact">
	<h2 class="contact__title">Travaillons ensemble.</h2>
	<a href="mailto:">
		<h3 class="contact__subtitle"><span class="text-mark">Prenez contact</span>.</h3>
	</a>
</section>

<style lang="scss">
	.contact {
		margin-block: 3rem;
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: $montserrat-semibold;
		&__title {
			font-size: 1.6rem;
		}
		&__subtitle {
			font-size: 1.5rem;
		}
	}
</style>
