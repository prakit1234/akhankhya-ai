<script>
  import { signIn, signOut, getCurrentUser , onAuthStateChange } from '$lib/auth';

  let email = '';
  let password = '';
  let user = null;

  // Check the current user on component mount
  user = getCurrentUser ();

  // Listen for authentication state changes
  onAuthStateChange((event, session) => {
      user = session?.user;
  });

  const handleSignIn = async () => {
      await signIn(email, password);
      // Optionally, reset the form or handle post-sign-in logic
  };

  const handleSignOut = async () => {
      await signOut();
      // Optionally, handle any post-sign-out logic
  };
</script>

<!-- Sign-in form -->
<form on:submit|preventDefault={handleSignIn}>
  <input type="email" bind:value={email} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <button type="submit">Sign In</button>
</form>

<!-- Sign-out button -->
{#if user}
  <button on:click={handleSignOut}>Sign Out</button>
{/if}

<!-- Display current user information -->
{#if user}
  <p>Welcome, {user.email}!</p>
{/if}