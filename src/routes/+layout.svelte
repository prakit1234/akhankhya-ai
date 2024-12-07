<script>
    import { supabase, signOut } from '$lib/auth';
  
    /**
     * @type {import("@supabase/auth-js").User | null}
     */
    let user;
  
    supabase.auth.onAuthStateChange((_, session) => {
      user = session?.user || null;
    });
  
    const handleLogout = async () => {
      await signOut();
      window.location.href = '/';
    };
  </script>
  
  <nav>
    <div class="nav-container">
      <h1>Akhankhya AI</h1>
      {#if user}
        <button on:click={handleLogout}>Logout</button>
      {/if}
    </div>
  </nav>
  
  <slot />
  
  <footer>
    <p>© Akhankhya AI 2024</p>
  </footer>
  
  <style>
    nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem; /* Added horizontal padding for better spacing */
    background: linear-gradient(135deg, #6a0dad, #ff79c6); /* Gradient from purple to pink */
    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
    font-family: 'Poppins', sans-serif; /* Ensure Poppins font is used */
}

nav h1 {
    font-size: 2rem; /* Increased font size for the title */
    font-weight: 700; /* Bold font weight */
    letter-spacing: 1px; /* Slight letter spacing for a more elegant look */
}

button {
    padding: 0.5rem 1.5rem; /* Adjusted padding for the button */
    font-size: 1rem; /* Font size for the button */
    border: none;
    border-radius: 8px; /* Rounded corners */
    background: #ff79c6; /* Pink background for the button */
    color: white;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease; /* Smooth transition */
    font-weight: 600; /* Bold font weight for button text */
}

button:hover {
    background: #6a0dad; /* Change background on hover */
    transform: scale(1.05); /* Slightly scale up on hover */
}

footer {
    text-align: center;
    padding: 1rem;
    background: #121212;
    color: white;
    font-family: 'Poppins', sans-serif; /* Ensure Poppins font is used */
    font-weight: 500; /* Medium font weight for footer text */
    letter-spacing: 0.5px; /* Slight letter spacing for footer text */
    border-top: 2px solid #ff79c6; /* Added a top border for separation */
}

footer p {
    margin: 0; /* Remove default margin */
    font-size: 0.9rem; /* Font size for footer text */
}
  </style>
  