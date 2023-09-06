<script>
	import { page } from '$app/stores';
	import Footer from '../components/Footer.svelte';
	import '$lib/fonts/fonts.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Page non trouvée - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar />

<main class="main">
	{#if $page.status === 404}
		<h1>Oops !</h1>
		<p>Page non trouvée...</p>
	{/if}
</main>

<Footer />

<style lang="scss">
	.main {
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
