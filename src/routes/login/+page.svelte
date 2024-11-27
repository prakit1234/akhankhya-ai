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
        redirectTo: `${window.location.origin}/chat`,
      },
    });
  };
</script>

<div class="login-container">
  <div class="login-box">
    <h1>Akhankhya AI</h1>
    <p class="subtitle">Log in to explore the power of Akhankhya AI</p>

    <div class="form">
      <input type="email" placeholder="Email" bind:value={email} />
      <input type="password" placeholder="Password" bind:value={password} />
      <button class="email-button" on:click={handleEmailLogin}>Login with Email</button>
    </div>

    <div class="divider">
      <span>or</span>
    </div>

    <button class="google-button" on:click={handleGoogleLogin}>
      <img src="/google-logo.svg" alt="Google logo" /> Sign in with Google
    </button>

    <p class="register-text">
      Don't have an account? <a href="/register">Register here</a>.
    </p>

    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  /* Global Styling */
  :global(body) {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(120deg, #141e30, #243b55);
    color: white;
    overflow: hidden;
  }

  /* Login Container */
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-box {
    background: linear-gradient(135deg, rgba(44, 44, 84, 0.8), rgba(64, 64, 122, 0.9));
    backdrop-filter: blur(15px);
    padding: 3rem 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    max-width: 450px;
    width: 90%;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
    transform: scale(0.95);
    transition: transform 0.3s;
  }

  .login-box:hover {
    transform: scale(1);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  }

  /* Header */
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #ff758c, #fbc2eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: glow 2s infinite alternate;
  }

  @keyframes glow {
    0% {
      text-shadow: 0 0 5px #ff758c, 0 0 10px #ff758c, 0 0 20px #fbc2eb;
    }
    100% {
      text-shadow: 0 0 10px #ff758c, 0 0 20px #fbc2eb, 0 0 30px #fbc2eb;
    }
  }

  .subtitle {
    font-size: 1rem;
    color: #cccccc;
    margin-bottom: 2rem;
  }

  /* Form Styling */
  .form input {
    width: 100%;
    padding: 0.9rem;
    margin-bottom: 1.2rem;
    border: none;
    border-radius: 8px;
    background: #1e1e2f;
    color: white;
    font-size: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s;
  }

  .form input::placeholder {
    color: #bbbbbb;
    font-weight: 400;
  }

  .form input:focus {
    outline: none;
    border: 2px solid #6a0dad;
    box-shadow: 0 0 10px rgba(106, 13, 173, 0.4);
  }

  /* Buttons */
  .email-button {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1.2rem;
    border: none;
    border-radius: 8px;
    background: linear-gradient(45deg, #6a0dad, #8a2be2);
    color: white;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .email-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.4);
  }

  .google-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    background: white;
    color: #1e1e2f;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .google-button img {
    width: 24px;
    height: 24px;
  }

  .google-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
  }

  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    color: #cccccc;
    font-size: 0.9rem;
  }

  /* Register Link */
  .register-text {
    font-size: 0.9rem;
    color: #cccccc;
  }

  .register-text a {
    color: #ff758c;
    font-weight: 600;
    text-decoration: none;
  }

  .register-text a:hover {
    text-decoration: underline;
  }

  /* Error Message */
  .error {
    color: #ff4d4d;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
