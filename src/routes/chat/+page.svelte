<script lang="ts">
  import { onMount } from "svelte";
  import { GoogleGenerativeAI } from "@google/generative-ai";

  let userPrompt = "";
  let messages = [];
  let isLoading = false;
  let chatWindow = null; // For auto-scrolling
  let genAI;

  // Initialize the Google Generative AI API
  onMount(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("API Key is missing!");
      return;
    }

    try {
      genAI = new GoogleGenerativeAI(apiKey);
    } catch (error) {
      console.error("Error initializing Google Generative AI:", error);
    }
  });

  // Scroll the chat window to the bottom
  const scrollToBottom = () => {
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  };

  // Generate AI content
  async function generateContent() {
    if (!userPrompt.trim() || isLoading) return;

    // Add the user's message to the chat
    messages = [...messages, { role: "user", content: userPrompt }];
    const currentPrompt = userPrompt; // Save the user's input for processing
    userPrompt = ""; // Clear input field
    isLoading = true;

    // Simulate AI typing
    messages = [...messages, { role: "ai", content: "..." }]; // Placeholder for AI response

    try {
      const model = genAI.getGenerativeModel({ model: "Gemini 1.5 Pro" });
      const result = await model.generateContent(currentPrompt);
      
      // Replace the placeholder with the actual AI response
      messages[messages.length - 1] = { role: "ai", content: result.response.text() || "No response." };
    } catch (error) {
      console.error("Error generating content:", error);
      messages[messages.length - 1] = { role: "ai", content: "Oops! Something went wrong. Please try again." };
    } finally {
      isLoading = false;
      scrollToBottom();
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

  :global(body) {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #141e30, #243b55);
    color: white;
  }

  .container {
    max-width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 20px;
  }

  header {
    text-align: center;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #ff758c, #ff7eb3);
    padding: 20px;
    border-radius: 10px;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    color: #fff;
    margin-top: -5px;
  }

  .chat-window {
    flex: 1;
    background: #1f2c40;
    border-radius: 10px;
    padding: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  .chat-message {
    display: flex;
    margin-bottom: 10px;
  }

  .user-message {
    justify-content: flex-end;
  }

  .ai-message {
    justify-content: flex-start;
  }

  .message-bubble {
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 1rem;
    max-width: 70%;
    word-wrap: break-word;
  }

  .user-message .message-bubble {
    background: linear-gradient(90deg, #6a85b6, #bac8e0);
    color: black;
  }

  .ai-message .message-bubble {
    background: linear-gradient(90deg, #ff758c, #ff7eb3);
    color: white;
  }

  .loading {
    font-style: italic;
    color: #ccc;
  }

  footer {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .input-container {
    display: flex;
    flex: 0 0 auto;
    width: 100%;
  }

  .input-field {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: 1rem;
    background: #fff;
    color: #333;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .send-button {
    padding: 10px 15px;
    border: none;
    border-radius: 20px;
    background: linear-gradient(90deg, #ff758c, #ff7eb3);
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s, transform 0.2s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .send-button:hover {
    background: linear-gradient(90deg, #ff7eb3, #ff758c);
    transform: scale(1.05);
  }
</style>

<div class="container">
  <header>
    <h1>Chat with Akhankhya AI</h1>
    <h2>Ask me anything!</h2>
  </header>
  <div class="chat-window" bind:this={chatWindow}>
    {#each messages as message}
      <div class="chat-message {message.role}-message">
        <div class="message-bubble">
          {#if message.role === 'ai' && message.content === "..."}
            <span class="loading">AI is typing...</span>
          {:else}
            {message.content}
          {/if}
        </div>
      </div>
    {/each}
  </div>
  <footer>
    <div class="input-container">
      <input
        type="text"
        bind:value={userPrompt}
        class="input-field"
        placeholder="Type your message..."
        on:keydown={(e) => e.key === 'Enter' && generateContent()}
      />
      <button class="send-button" on:click={generateContent}>Send</button>
    </div>
  </footer>
</div>
