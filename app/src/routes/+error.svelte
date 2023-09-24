<script>
	// Import modules
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page non trouvée - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<main class="main">
	{#if $page.status === 404}
		<h1>Oops !</h1>
		<p>Page non trouvée...</p>
	{/if}
</main>

<style lang="scss">
	.main {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
