<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

  :global(body) {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  .gradient-background {
    background: linear-gradient(135deg, #6a11cb, #2575fc); /* Example gradient colors */
    min-height: 100vh; /* Full height */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; /* Text color */
  }
</style>

<div class="gradient-background">
  <slot></slot>
</div>