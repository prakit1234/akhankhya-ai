<script>
  import { supabase } from '$lib/auth';

  let email = '';
  let password = '';
  let confirmPassword = '';
  let errorMessage = '';
  let successMessage = '';

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      errorMessage = "Passwords don't match.";
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      errorMessage = error.message;
    } else {
      successMessage = 'Account created! You can now log in.';
      email = '';
      password = '';
      confirmPassword = '';
    }
  };
</script>

<div class="register-container">
  <h2>Create an Account</h2>
  <div class="form">
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <input
      type="password"
      placeholder="Confirm Password"
      bind:value={confirmPassword}
    />
    <button class="button" on:click={handleRegister}>Register</button>
  </div>

  <p>Already have an account? <a href="/login">Login here</a>.</p>

  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}
  {#if successMessage}
    <p class="success">{successMessage}</p>
  {/if}
</div>

<style>
  .register-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
    padding: 2rem;
    background: #121212;
    border-radius: 8px;
    color: white;
    margin-top: 5rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  .error {
    color: red;
    margin-top: 1rem;
  }

  .success {
    color: green;
    margin-top: 1rem;
  }
</style>
