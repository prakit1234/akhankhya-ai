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
      padding: 1rem;
      background: linear-gradient(45deg, #6a0dad, #8a2be2);
      color: white;
    }
  
    footer {
      text-align: center;
      padding: 1rem;
      background: #121212;
      color: white;
    }
  </style>
  