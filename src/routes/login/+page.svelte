<script>
  import { supabase } from '$lib/auth';

  let email = '';
  let password = '';
  let errorMessage = '';

  const handleEmailLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      errorMessage = error.message;
    } else {
      window.location.href = '/chat';
    }
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/chat`
      }
    });
  };
</script>

<div class="login-container">
  <h2>Login</h2>
  <p>Log in to access Akhankhya AI</p>

  <div class="form">
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button class="button" on:click={handleEmailLogin}>Login with Email</button>
  </div>

  <button class="google-button" on:click={handleGoogleLogin}>
    <img src="/google-logo.svg" alt="Google logo" /> Sign in with Google
  </button>

  <p>Don't have an account? <a href="/register">Register here</a>.</p>

  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}
</div>

<style>
  .login-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
    padding: 2rem;
    background: #121212;
    border-radius: 8px;
    color: white;
    margin-top: 5rem;
  }

  .form {
    margin-bottom: 1.5rem;
  }

  .form input {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    background: #1e1e2f;
    color: white;
  }

  .button {
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    background: linear-gradient(45deg, #6a0dad, #8a2be2);
    color: white;
    cursor: pointer;
  }

  .google-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem;
    background: white;
    color: #121212;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .google-button img {
    width: 20px;
    height: 20px;
  }

  .error {
    color: red;
    margin-top: 1rem;
  }
</style>
