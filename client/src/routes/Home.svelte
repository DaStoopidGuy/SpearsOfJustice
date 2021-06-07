<!-- JavaScript -->
<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import Navbar from "../components/Navbar.svelte";
    import Post from "../components/Post.svelte";
    import CreatePost from "../components/CreatePost.svelte";
    import { posts } from "../stores";

    onMount(async () => {
        const promise = await axios.get("http://localhost:3000/api/posts");
        posts.set(promise.data);
    });

    // Delete Post
    async function deletePost(post) {
        let response = await axios.delete(
            "http://localhost:3000/api/posts/" + post._id
        );
        if (response.data.id === post._id) {
            posts.update((value) => value.filter((p) => p._id !== post._id));
        }
    }
</script>

<!-- HTML -->
<div class="homepage">
    <Navbar />
    <CreatePost {$posts} />
    <div class="posts">
        {#each $posts as post}
            <Post {post} {deletePost} />
        {/each}
    </div>
</div>

<!-- CSS -->
<style lang="scss">
    .homepage {
        background-color: #1e1e1e;
        color: white;
        min-height: 100vh;
    }
</style>
