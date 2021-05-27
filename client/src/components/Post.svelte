<!-- JavaScript -->
<script>
    export let post;
</script>

<!-- HTML -->
<div class="post">
    <h1 class="post-title">Title: {post.title}</h1>
    <h6 class="post-date">{post.date}</h6>
    <p>{post.body}</p>
    <br />
</div>

<!-- CSS -->
<style lang="scss">
    .post {
        border: 0.1rem solid white;
        border-radius: 0.3rem;
        padding: 0.5rem;
        margin: 1rem;
        background-color: #303030;
    }
</style>
