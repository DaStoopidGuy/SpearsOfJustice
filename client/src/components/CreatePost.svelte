<!-- JavaScript -->
<script>
    import axios from "axios";
    import { posts } from "../stores";
    import Post from "./Post.svelte";

    // Create Post
    let titleVar = "";
    let bodyVar = "";

    async function savePost() {
        let post = { title: titleVar, body: bodyVar };
        const response = await axios.post(
            "/api/posts",
            post
        );
        posts.update((value) => [response.data, ...value]);
        titleVar = "";
        bodyVar = "";
        
    }
</script>

<!-- HTML -->
<div class="create-post">
    <h1>Add new post</h1>
    <input bind:value={titleVar} type="text" placeholder="Title" />
    <textarea bind:value={bodyVar} cols="30" rows="10" placeholder="Post" />
    <button on:click={savePost}>Save</button>
</div>

<!-- CSS -->
<style lang="scss">
    .create-post {
        border: 0.1rem solid rgb(117, 117, 117);
        border-radius: 0.3rem;
        padding: 0.5rem;
        margin: 1rem;
        background-color: #303030;
        display: flex;
        flex-direction: column;
    }

    input[type="text"] {
        padding: 0.25rem 1rem;
        margin: 0.5rem 0;
        align-self: center;
        width: 95%;
        height: 2.25rem;
        outline: none;
        border: 0.1rem solid rgb(117, 117, 117);
        border-color: rgba(0, 0, 0, 0.15);
        background-color: #252525;
        color: white;
        font-size: 1rem;
    }
    textarea {
        padding: 0.25rem 1rem;
        margin: 0.5rem 0;
        align-self: center;
        width: 95%;
        height: 10rem;
        outline: none;
        resize: none;
        border: 0.1rem solid rgb(117, 117, 117);
        border-color: rgba(0, 0, 0, 0.15);
        background-color: #252525;
        color: white;
        font-size: 1rem;
    }
    button {
        background-color: rgb(110, 110, 110);
        color: white;
        border: 2px solid rgb(117, 117, 117);
        margin: 0.25rem 20rem;
        &:hover {
            background-color: rgb(61, 61, 61);
        }
        min-width: 20px;
    }
</style>
