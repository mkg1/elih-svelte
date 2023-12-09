<script>
	import Header from '$lib/components/Header.svelte';
    import '$lib/styles/styles.scss';
    import { fade } from 'svelte/transition';
    export let data;
</script>

<Header />

<header>Explain Like I'm Human</header>
{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<footer>Footer goes here.</footer>