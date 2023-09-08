<script>
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Project from '../components/Project.svelte';
	import Contact from '../components/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	import Settings from '../components/Settings.svelte';
	import Accessibility from '../components/Accessibility.svelte';

	let isSettingOpen = false;
</script>

<svelte:head>
	<title>Accueil - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar isActive={'home'} />

<Accessibility on:openSetting={() => isSettingOpen = !isSettingOpen}/>

{#if isSettingOpen}
	<Settings on:closeSetting={() => isSettingOpen = !isSettingOpen} />
{/if}


<div class="container">
	<Hero />

	<main class="main">
		<Project />
		<Contact />
	</main>

	<Footer />
</div>
