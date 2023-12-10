<script>
    import '$lib/styles/styles.scss';
    import { fade } from 'svelte/transition';
    export let data;
</script>

<header>ELIH</header>
{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<footer>(footer will go here)</footer>