<script>
	import Header from '$lib/components/Header.svelte';
    import '$lib/styles/styles.scss';
</script>

<Header />

<header>Hi, I'm a header</header>

<main>
	<slot />
</main>

<footer>Hello, I'm the footer.</footer>