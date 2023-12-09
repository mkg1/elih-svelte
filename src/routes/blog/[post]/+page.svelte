<script>
    export let data; //automatically available here from preloaded +page.js file
</script>

<article>
    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    <svelte:component this={data.content} />  
    <!-- svelte:component renders an arbitrary svelte component -->
    <!-- could also desstructure the data and use <Content /> as its own component -->
</article>
