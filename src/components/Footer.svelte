<script>
	import '../app.scss';
</script>

<footer class="footer">
	<div class="creator">
		<img src="./images/logo20x20.png" alt="Logo de Costin Cadeau" class="creator__logo" />
		<a href="./" class="creator__name">Costin Cadeau</a>
	</div>
	<div class="social">
		<a href="https://www.linkedin.com/in/costin-cadeau/" target="_blank" rel="noopener noreferrer" class="social__link">Linkedin</a>
		<a href="https://github.com/c-costin" target="_blank" rel="noopener noreferrer" class="social__link">GitHub</a>
	</div>
</footer>

<style lang="scss">
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
			max-height: 18px;
		}
	}
	.social {
		display: flex;
		gap: 1rem;
	}
</style>
