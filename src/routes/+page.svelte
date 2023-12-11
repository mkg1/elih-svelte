<script>
    import Landing from '$lib/components/Landing/Landing.svelte';
    export let data;  //we have access to blog posts here from what's set up in the prpe-loaded +page.js file
</script>

<Landing {data} />
