<!-- JavaScript -->
<script>
    import Logo from "./Logo.svelte";
    import { authenticated, posts } from "../stores" 
    import axios from "axios";
    axios.defaults.withCredentials = true;

    async function logout() {
        const response = await axios.get("/api/logout")
        authenticated.set(false)
        posts.set([])
    }
</script>

<!-- HTML -->
<header>
    <a class="logo-a" href="/"><Logo /></a>
    <nav>
        <ul>
            {#if !$authenticated}
            <li><a href="#/login" class="login-nav">Log In</a></li>
            <li><a href="#/register" class="register-nav">Register</a></li>
            {:else}
            <li><a href="#/" on:click={logout} class="logout-nav">Logout</a></li>
            {/if}
            
        </ul>
    </nav>
</header>

<!-- CSS -->
<style lang="scss">
    header {
        background-color: #1e1e1e;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // The Logo
        a {
            text-decoration: none;
            color: white;
            display: block;
        }
    }
    .logo-a {
        padding: 0.4rem 0.7rem;
        cursor: pointer;
    }
    ul {
        list-style: none;
        display: flex;
        // List Items
        li {
            // Navbar Items
            a {
                padding: 0.8rem 1.3rem;
                cursor: pointer;
                margin: 0.2rem;
                border-radius: 0.15rem;
                &:hover {
                    background-color: rgb(48, 48, 48);
                }
            }
            .register-nav {
                &:hover {
                    color: rgb(81, 236, 34);
                }
            }
            .login-nav {
                &:hover {
                    color: rgb(36, 175, 255);
                }
            }
            .logout-nav {
                color: rgb(245, 73, 73);
                &:hover {
                    color: red;
                }
            }
        }
    }
</style>
