<script>
	import Navbar from '../../components/Navbar.svelte';
	import About from '../../components/About.svelte';
	import Experience from '../../components/Experience.svelte';
	import Study from '../../components/Study.svelte';
	import Contact from '../../components/Contact.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
	<title>Costin Cadeau - Développeur Web & Web Mobile</title>
</svelte:head>

<Navbar isActive={'profil'} />

<main class="main">
	<About />
	<Experience />
	<Study />
	<Contact />
</main>

<Footer />
