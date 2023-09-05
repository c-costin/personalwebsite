<script>
	import { onDestroy } from 'svelte';
	import { invalidate } from '$app/navigation';

	// export let your_end_point_prop;

	// resfresh your_end_point_prop
	const apiInterval = setInterval(async () => {
		await invalidate('/profil');
	}, 1000000);

	// ... code to handle your end_point_prop

	onDestroy(() => {
		clearInterval(apiInterval);
	});
</script>

<slot />