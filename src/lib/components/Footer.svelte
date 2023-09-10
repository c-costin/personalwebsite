<script>
	import logo from '$lib/img/logo_small.png';
</script>

<footer class="footer">
	<div class="creator">
		<img src="{logo}" alt="Logo de Costin Cadeau" class="creator__logo" />
		<a href="/" class="creator__name">Costin Cadeau</a>
	</div>
	<div class="soc">
		<a href="https://www.linkedin.com/in/costin-cadeau/" target="_blank" rel="noopener noreferrer" class="soc__link">Linkedin</a>
		<a href="https://github.com/c-costin" target="_blank" rel="noopener noreferrer" class="soc__link">GitHub</a>
	</div>
</footer>

<style lang="scss">
	@import '../font/fonts.css';
	@import '../styles/variables';

	.footer {
		padding: 1.75rem 1.25rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		font-size: 0.85rem;
	}
	.creator {
		display: flex;
		gap: 0.5rem;
		&__name {
			max-height: 15px;
		}
	}
	.soc {
		display: flex;
		gap: 1rem;
	}
</style>
