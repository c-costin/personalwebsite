<script>
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Contact from '../components/Contact.svelte';
	import Project from '../components/Project.svelte';
	import Hero from '../components/Hero.svelte';
</script>

<svelte:head>
	<title>Accueil - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>

<Navbar isActive={'home'} />

<Hero />

<main class="main">
	<Project />
    <Contact />
</main>

<Footer />
