<script>
	import Navbar from '../../components/Navbar.svelte';
	import About from '../../components/About.svelte';
	import Contact from '../../components/Contact.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<Navbar isActive={'profil'} />

<main class="main">
	<About />
	<!-- <Experience /> -->
	<Contact />
</main>

<Footer />
