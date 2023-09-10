<script>
	// Import Style
	import '$lib/styles/app.scss';

	// Import components
	import Navbar from '$lib/components/Navbar.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Project from '$lib/components/Project.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Declare variable
	let isSettingOpen = false;
</script>

<svelte:head>
	<title>Accueil - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar
	isActive={'home'}
	openSetting={isSettingOpen}
	on:openSetting={() => (isSettingOpen = !isSettingOpen)}
/>

{#if isSettingOpen}
	<Settings />
{/if}

<div class="container">
	<Hero />

	<main class="main">
		<Project />
		<Contact />
	</main>

	<Footer />
</div>
