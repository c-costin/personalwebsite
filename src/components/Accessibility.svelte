<script>
	import iconAccessibility from '$lib/icons/accessibility.svg';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<nav class="accessibility">
	<button class="accessibility__btn" on:click={() => (dispatch('openSetting'))}>
		<img class="accessibility__icon" src={iconAccessibility} alt="Icon d'accessibilité" />
        Accessibilité
	</button>
</nav>

<style lang="scss">
	.accessibility {
		position: fixed;
		bottom: 4rem;
		right: 1rem;
		&__btn {
            padding: 0.25rem 0.45rem;
			height: fit-content;
            display: flex;
            gap: 0.25rem;
            align-items: center;
			border: 1.5px solid $neutral-black;
			border-radius: .5rem;
			backdrop-filter: blur(3.8px);
			-webkit-backdrop-filter: blur(3.8px);
			box-shadow: $second-shadow;
			background: $transparent-neutral-white;
		}
		&__icon {
			width: 24px;
		}
	}
</style>
