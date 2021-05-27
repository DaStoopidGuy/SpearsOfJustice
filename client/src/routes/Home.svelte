<!-- JavaScript -->
<script>
    import Navbar from "../components/Navbar.svelte";
    import { onMount } from "svelte";
    import axios from "axios";

    onMount(async () => {
        const promise = axios.get("/api/posts");
    });
</script>

<!-- HTML -->
<Navbar />
<div class="homepage">homepage</div>

<!-- CSS -->
<style lang="scss">
    .homepage {
        background-color: #1e1e1e;
        color: white;
        height: 100vh;
    }
</style>
