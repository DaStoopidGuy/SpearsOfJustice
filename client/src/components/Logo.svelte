<!-- JavaScript -->
<script>
    // PROPS
    export let primary = "white";
    export let secondary = "white";
    export let size = "1.5rem";

    // Setting the props to css variables
    $: document.documentElement.style.setProperty("--color-prm", primary);
    $: document.documentElement.style.setProperty("--color-sec", secondary);
    $: document.documentElement.style.setProperty("--font-size", size);
</script>

<!-- HTML -->

<h1 class="logo">Spears<span class="logo-secondary">Of</span>Justice</h1>

<!-- CSS -->
<style lang="scss">
    .logo {
        color: var(--color-prm);
        font-size: var(--font-size);
    }
    .logo-secondary {
        color: var(--color-sec);
    }
</style>
