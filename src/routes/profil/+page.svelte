<script>
	// Import style
	import '$lib/styles/app.scss';

	// Import components
	import Navbar from '$lib/components/Navbar.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Study from '$lib/components/Study.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Declare variable
	let isSettingOpen = false;
</script>

<svelte:head>
	<title>Profil - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar
	isActive={'profil'}
	openSetting={isSettingOpen}
	on:openSetting={() => (isSettingOpen = !isSettingOpen)}
/>

{#if isSettingOpen}
	<Settings />
{/if}

<div class="container">
	<main class="main">
		<About />
		<Experience />
		<Study />
		<Contact />
	</main>

	<Footer />
</div>
