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

<div class="footer-basic">
    <footer>
        <div class="social">
            <a href="#"><i class="icon ion-social-instagram" /></a>
            <a href="#"><i class="icon ion-social-snapchat" /></a>
            <a href="#"><i class="icon ion-social-twitter" /></a>
            <a href="#"><i class="icon ion-social-facebook" /></a>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#">Services</a></li>
            <li class="list-inline-item"><a href="#">About</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Explain Like I'm Human © 2013</p>
    </footer>
</div>
