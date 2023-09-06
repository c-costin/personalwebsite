<script>
	import Navbar from '../../components/Navbar.svelte';
	import Contact from '../../components/Contact.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
	<title>Contact - Costin Cadeau, développeur Web & Web Mobile</title>
</svelte:head>


<Navbar isActive={'contact'} />

<main class="main">
	<Contact />
</main>

<Footer />
