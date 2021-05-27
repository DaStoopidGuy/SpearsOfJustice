<!-- JavaScript -->
<script>
    import Navbar from "../components/Navbar.svelte";
    import Post from "../components/Post.svelte";
    import { onMount } from "svelte";
    import axios from "axios";

    let posts = [];

    onMount(async () => {
        const promise = await axios.get("http://localhost:3000/api/posts");
        posts = promise.data;
        console.log(posts);
    });
</script>

<!-- HTML -->
<Navbar />
<div class="homepage">
    {#each posts as post}
        <Post {post} />
    {/each}
</div>

<!-- CSS -->
<style lang="scss">
    .homepage {
        background-color: #1e1e1e;
        color: white;
        height: 100vh;
    }
</style>
