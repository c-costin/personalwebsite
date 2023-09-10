<script>
    import '$lib/styles/app.scss';

	// Import modules
	import { page } from '$app/stores';

	// Import components
	import Navbar from '$lib/components/Navbar.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Declare variable
	let isSettingOpen = false;
</script>

<svelte:head>
	<title>Page non trouvée - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar openSetting={isSettingOpen} on:openSetting={() => (isSettingOpen = !isSettingOpen)} />

{#if isSettingOpen}
	<Settings />
{/if}

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
