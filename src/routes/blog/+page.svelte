<script>
    export let data;  //we have access to blog posts here from what's set up in the prpe-loaded +page.js file
</script>

<!-- TODO: account for scenario when there are no blogs to display -->
<div>
    <h1>Blog</h1>
    <ul>
        {#each data.posts as post}
            <li>
                <h2>
                    <a href={post.path}>
                        {post.meta.title}
                    </a>
                </h2>
                Published {post.meta.date}
            </li>
            {/each}
    </ul>
</div>

<style>
	ul {
		list-style: none;
	}

    a { 
        color: white;
        text-decoration: none;
    }
</style>