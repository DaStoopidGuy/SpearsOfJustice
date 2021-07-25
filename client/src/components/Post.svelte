<!-- JavaScript -->
<script>
    export let post;
    export let deletePost;
    
    post.body
</script>

<!-- HTML -->
<div class="post">
    <div class="heading">
        <h1 class="post-title">{post.title}</h1>
        <h6 class="post-date">{post.date}</h6>
    </div>
    <p>{post.body}</p>
    <button
        on:click={() => {
            deletePost(post);
        }}>Delete</button
    >
</div>
<br />

<!-- CSS -->
<style lang="scss">
    .post {
        border: 0.1rem solid rgb(117, 117, 117);
        border-radius: 0.3rem;
        padding: 0.5rem;
        margin: 1rem;
        background-color: #303030;
        // Heading
        .heading {
            display: flex;
            justify-content: space-between;
        }
    }
    h1 {
        font-size: 1.75rem;
    }
</style>
