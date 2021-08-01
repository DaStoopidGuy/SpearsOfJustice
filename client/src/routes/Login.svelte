<!-- JavaScript -->
<script>
    import axios from "axios";
    import Navbar from "../components/Navbar.svelte";

    let username, password, verifyPassword;

    async function handleLogin()
    {
        const crendentials = {username: username, password: password, passwordVerify: verifyPassword};
        const response = await axios.post("http://localhost:3000/api/auth/register", crendentials)
        username = ""
        password = ""
        verifyPassword = ""
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
        <label >Verify Password:</label>
        <input type="password" bind:value={verifyPassword}>
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
