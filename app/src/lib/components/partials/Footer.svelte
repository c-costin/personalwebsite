<script>
	// Import generals style
	import '$lib/styles/main.scss';

	// Import assets
	import logo from '$lib/images/logo_small.png';
</script>

<footer class="footer">
	<div class="creator">
		<img src={logo} alt="Logo de Costin Cadeau" class="creator__logo" />
		<a href="/" class="creator__name">Costin Cadeau</a>
	</div>
	<div class="soc">
		<a
			href="https://www.linkedin.com/in/costin-cadeau/"
			target="_blank"
			rel="noopener noreferrer"
			class="soc__link"
		>
			Linkedin
		</a>
		<a
			href="https://github.com/c-costin"
			target="_blank"
			rel="noopener noreferrer"
			class="soc__link"
		>
			GitHub
		</a>
	</div>
</footer>

<style lang="scss">
	@use '../../styles/variables' as var;

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
		align-items: center;
		&__name {
			&:hover {
				color: var.$color-blue;
				text-decoration: underline;
			}
		}
	}

	.soc {
		display: flex;
		gap: 1rem;
		&__link {
			&:hover {
				color: var.$color-blue;
				text-decoration: underline;
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.creator {
			&__name {
				&:hover {
					color: var.$color-yellow;
				}
			}
		}

		.soc {
			&__link {
				&:hover {
					color: var.$color-yellow;
				}
			}
		}
	}

	:global(body.dark) {
		.creator {
			&__name {
				&:hover {
					color: var.$color-yellow;
				}
			}
		}

		.soc {
			&__link {
				&:hover {
					color: var.$color-yellow;
				}
			}
		}
	}
</style>
