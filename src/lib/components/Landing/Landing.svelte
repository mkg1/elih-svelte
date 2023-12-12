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
                <span><strong>{'\u00A0' + post.meta.title.toUpperCase()}</strong></span>
            </a>
        {/each}
    </div>
</div>

<style>
    .wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        height:auto !important;
        min-height:100%; /* real browsers */
        padding-bottom: 255px;    
    }

    span {
        color: #efeeb4;
    }
    .landingMenu {
        text-align: justify;
        padding: 3rem;
        min-height: 50%;
        width: 80%;
        background: rgba(217, 217, 217, 0.4);
        font-family: 'Bungee Hairline', sans-serif; 
        font-size: 24px;
        letter-spacing: .3rem;
        color: rgb(255, 255, 255, .4);
        box-shadow: 0px 0px 25px 10px rgb(218, 216, 115, .80);
    }
    a {
        text-decoration: none;
        color: white;
    }

</style>