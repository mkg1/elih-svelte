<script>
    export let data;
    function generateRandomBinary() {
        let randomBinaryString = "";
        let binaryLength = Math.floor(Math.random() * (15 - 5 + 1) + 10);
        for (var i = 0; i < binaryLength; i++) {
            randomBinaryString += `\u00A0${Math.floor(Math.random() * 2)} `
        }
        return randomBinaryString;
    }
</script>

<div class="wrapper">
    <div class="landingMenu">
        <!-- TODO: account for scenario when there are no blogs to display -->
        {#each data.posts as post}
            {generateRandomBinary()}
            <a href={post.path}>
                {'\u00A0' + post.meta.title.toUpperCase()}
            </a>
        {/each}
    </div>
</div>

<style>
    .wrapper {
        position: relative;
        display: flex;
        justify-content: flex-end;
        height:auto !important;
        min-height:100%; /* real browsers */
        padding-bottom: 255px;    

    }
    .landingMenu {
        padding: 1rem;
        min-height: 50%;
        width: 80%;
        height: 80%;
        background: rgba(217, 217, 217, 0.4);
        font-family: 'Turret Road', sans-serif;   
        font-size: 24px;
        letter-spacing: .3rem;
        color: rgb(255, 255, 255, .4);
    }
    a {
        text-decoration: none;
        color: white;
    }

</style>