<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`)
            .then(r => r.json())
            .then(posts => {
                return { posts };
            });
    }
</script>

<script>
    import { stateStore } from '../../stores/statebot.js';
    clearInterval($stateStore.timerId);
    clearInterval($stateStore.timerIdlist);
    
    export let posts;
</script>

<style>
    ul {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
</style>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<div class="container mx-auto">
    <h1 class="text-2xl text-center mb-4">Recent posts</h1>

    <ul class="text-center">
        {#each posts as post}
            <!-- we're using the non-standard `rel=prefetch` attribute to
tell Sapper to load the data for the page as soon as
the user hovers over the link or taps it, instead of
waiting for the 'click' event -->
            <li>
                <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
            </li>
        {/each}
    </ul>
</div>
