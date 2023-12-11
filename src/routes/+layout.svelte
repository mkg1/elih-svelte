<script>
    import '$lib/styles/styles.scss';
    import Header from '$lib/components/Header/Header.svelte'
    import { fade } from 'svelte/transition';
    export let data;
</script>

<Header />
{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<footer>(footer will go here)</footer>