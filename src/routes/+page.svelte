<script>
  const redirectToLogin = () => (window.location.href = '/login');
</script>

<div class="landing-container">
  <header>
    <h1>Welcome to Akhankhya AI</h1>
    <p>Your intelligent chatbot powered by Gemini AI</p>
    <button class="button" on:click={redirectToLogin}>Start Chatting</button>
  </header>
  
  <section class="info-section">
    <h2>Why Akhankhya AI?</h2>
    <div class="info-cards">
      <div class="card">
        <h3>Smart Responses</h3>
        <p>Get accurate and intelligent answers to your queries instantly.</p>
      </div>
      <div class="card">
        <h3>Secure</h3>
        <p>Your data is stored securely with Supabase.</p>
      </div>
      <div class="card">
        <h3>Powered by Gemini AI</h3>
        <p>Leverage cutting-edge AI technology for exceptional conversations.</p>
      </div>
    </div>
  </section>
</div>

<style>
  .landing-container {
    text-align: center;
    background: linear-gradient(to bottom, #121212, #2b1055);
    color: white;
    min-height: 100vh;
    padding: 2rem;
  }

  .button {
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    background: linear-gradient(45deg, #6a0dad, #8a2be2);
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .button:hover {
    transform: scale(1.1);
    background: linear-gradient(45deg, #8a2be2, #ff79c6);
  }

  .info-section {
    margin-top: 3rem;
  }

  .info-cards {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .card {
    background: #1e1e2f;
    padding: 1.5rem;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
</style>
