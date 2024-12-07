<script>
  const redirectToLogin = () => (window.location.href = '/login');
</script>

<div class="landing-container">
  <header>
    <div class="logo">
      <img src="https://i.ibb.co/S7FhB6X/Akhankhya-Ai.png" alt="Akhankhya AI Logo" />
    </div>
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
  
  <section class="features-section">
    <h2>Key Features</h2>
    <div class="features-cards">
      <div class="feature-card">
        <h3>Conversational AI</h3>
        <p>Engage with our chatbot and experience the power of conversational AI.</p>
      </div>
      <div class="feature-card">
        <h3>Personalized Experience</h3>
        <p>Get personalized responses based on your preferences and behavior.</p>
      </div>
      <div class="feature-card">
        <h3>Multi-Language Support</h3>
        <p>Communicate with our chatbot in multiple languages.</p>
      </div>
    </div>
  </section>
  
  <section class="testimonials-section">
    <h2>What Our Users Say</h2>
    <div class="testimonials-cards">
      <div class="testimonial-card">
        <p>"Akhankhya AI's chatbot is incredibly intelligent and helpful."</p>
        <h4>Akhankhya (my sister)</h4>
      </div>
      <div class="testimonial-card">
        <p>"I'm impressed with the chatbot's ability to understand my queries."</p>
        <h4>PD</h4>
      </div>
      <div class="testimonial-card">
        <p>"The chatbot's responses are always accurate and relevant."</p>
        <h4>Struti</h4>
      </div>
    </div>
  </section>
  
  <footer>
    <div class="footer-content">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:prakitchetia@gmail.com">prakitchetia@gmail.com</a></p>
      <p>Discord: Xtro_kai</p>
    </div>
    <div class="social-media-links">
      <a href="https://instagram.com/zen_ka.1" target="_blank"><i class="fa fa-instagram"></i></a>
      <a href="https://twitter.com/@teenagerofassam" target="_blank"><i class="fa fa-twitter"></i></a>
      <a href="https://github.com/prakit1234" target="_blank"><i class="fa fa-github"></i></a>
    </div>
  </footer>
</div>

<style>
 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #121212; /* Dark background for the body */
}

.landing-container {
    text-align: center;
    background: linear-gradient(to bottom right, #1e1e2f, #2b1055); /* Darker gradient */
    color: white;
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
 }
    to {
        opacity: 1;
    }
}

.logo {
    margin-bottom: 1rem;
}

.logo img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
}

h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    animation: slideIn 0.5s ease forwards;
    opacity: 0;
    transform: translateY(-20px);
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

p {
    font-size: 1.2rem;
    margin: 1rem 0;
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
    animation-delay: 0.3s;
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
    transition: transform 0.3s ease, background 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
    animation-delay: 0.5s;
}

.button:hover {
    transform: scale(1.1);
    background: linear-gradient(45deg, #8a2be2, #ff79c6);
}

.info-section, .features-section, .testimonials-section {
    margin-top: 3rem;
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
    animation-delay: 1.5s;
}

.info-cards, .features-cards, .testimonials-cards {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.card, .feature-card, .testimonial-card {
    background: #2b2b2f; /* Darker background for cards */
    padding: 1.5rem;
    border-radius: 12px;
    width: 280px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
}

.card:hover, .feature-card:hover, .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
}

.card h3, .feature-card h3 {
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.5rem;
}

.card p, .feature-card p, .testimonial-card p {
    font-size: 1rem;
}

.testimonial-card {
    background: #3b3b55; /* Different background for testimonials */
    padding: 1.5rem;
    border-radius: 12px;
    width: 300px;
}

.testimonial-card h4 {
    font-weight: 600;
    margin-top: 0.5rem;
}

.footer-content {
    margin-top: 3rem;
    padding: 1rem;
    background: #2b2b2f; /* Darker background for footer */
    border-radius: 8px;
}

.footer-content h3 {
    font-weight: 700;
}

.social-media-links a {
    margin: 0 10px;
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
}

.social-media-links a:hover {
    color: #ff79c6;
}
</style> ⬤