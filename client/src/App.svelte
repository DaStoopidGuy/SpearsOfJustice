<!-- JavaScript -->
<script>
    import "bulma/css/bulma.css";
    import Router from "svelte-spa-router";
    import Home from "./routes/Home.svelte";
    import Login from "./routes/Login.svelte";
    import NotFound from "./routes/NotFound.svelte";
    import Register from "./routes/Register.svelte";

    const routes = {
        "/": Home,
        "/login": Login,
        "/register": Register,

        // Catch-all
        "*": NotFound,
    };
</script>

<!-- HTML -->
<main>
    <Router {routes} />
</main>

<!-- CSS -->
<style lang="scss">
</style>
