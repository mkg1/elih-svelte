<script>
    export let data;
</script>

<div class="wrapper">
    <div class="landingMenu">
        <p>hello</p>
        <!-- TODO: account for scenario when there are no blogs to display -->
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
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: flex-end;
    }
    .landingMenu {
        /* position: fixed; */
        right: 0;
        bottom: 30px;
        width: 80%;
        height: 80%;
        background: rgba(217, 217, 217, 0.4);
        font-family: 'Turret Road', sans-serif;        
    }

</style>