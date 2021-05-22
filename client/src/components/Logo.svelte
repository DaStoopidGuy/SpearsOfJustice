<!-- JavaScript -->
<script>
    // PROPS
    export let Text;
    export let primary = "white";
    export let secondary = "white";
    export let size = "1.5rem";

    // Setting the props to css variables
    $: document.documentElement.style.setProperty("--color-prm", primary);
    $: document.documentElement.style.setProperty("--color-sec", secondary);
    $: document.documentElement.style.setProperty("--font-size", size);
</script>

<!-- HTML -->
{#if Text != undefined}
    <h1 class="logo">{Text}</h1>
{:else}
    <h1 class="logo">Spears<span class="logo-secondary">Of</span>Justice</h1>
{/if}

<!-- CSS -->
<style>
    .logo {
        color: var(--color-prm);
        font-size: var(--font-size);
    }
    .logo-secondary {
        color: var(--color-sec);
    }
</style>
