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

{#if data.categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each data.categories as category}
				<li>
					<a href="/blog/category/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}


