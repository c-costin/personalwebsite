<script>
	// Import components
	import Navbar from '$lib/components/Navbar.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Declare variable
	let isSettingOpen = false;
</script>

<svelte:head>
	<title>Contact - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar
	isActive={'contact'}
	openSetting={isSettingOpen}
	on:openSetting={() => (isSettingOpen = !isSettingOpen)}
/>

{#if isSettingOpen}
	<Settings />
{/if}

<div class="container">
	<main class="main">
		<Contact />
	</main>

	<Footer />
</div>
