<script>
	import Navbar from '../../components/Navbar.svelte';
	import Accessibility from '../../components/Accessibility.svelte';
	import Settings from '../../components/Settings.svelte';
	import About from '../../components/About.svelte';
	import Experience from '../../components/Experience.svelte';
	import Study from '../../components/Study.svelte';
	import Contact from '../../components/Contact.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
	<title>Profil - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar isActive={'profil'} />

<Accessibility />

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
