<!-- JavaScript -->
<script>
    import axios from "axios";
    axios.defaults.withCredentials = true;
    import Navbar from "../components/Navbar.svelte";
    import { authenticated } from "../stores";

    let username, password, verifyPassword;

    async function handleLogin()
    {
        const crendentials = {username: username, password: password};
        const response = await axios.post("/api/login", crendentials)
        username = ""
        password = ""
        verifyPassword = ""

        if (response.status === 200) {
            authenticated.set(true)
            window.location.href = "#/"
        }
    }
</script>

<!-- HTML -->
<div class="login-page">
    <Navbar />
    <div class="login-form">
        <label >Username: </label>
        <input type="text" bind:value={username}>
        <br>
        <label >Password:</label>
        <input type="password" bind:value={password}>
        <br>
        <button on:click={handleLogin}>Login</button>
    </div>
</div>

<!-- CSS -->
<style lang="scss">
    .login-page{
        background-color: #1e1e1e;
        min-height: 100vh;
        min-width: 100vw;
        color: white;
    }
    input{
        width: 12vw;
        height: 3vh;
    }
</style>
