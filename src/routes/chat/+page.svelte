<script>
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

    try {
      const result = await genAI.generateText({
        model: "Gemini 1.5 Pro", // Confirm this model name with your API
        prompt: currentPrompt,
        temperature: 0.7, // Adjust for creativity
        maxOutputTokens: 256, // Set the max response length
      });

      // Add AI's response
      messages = [
        ...messages,
        { role: "ai", content: result.candidates[0]?.output || "No response." },
      ];
    } catch (error) {
      console.error("Error generating content:", error);
      messages = [
        ...messages,
        { role: "ai", content: "Oops! Something went wrong. Please try again." },
      ];
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
  }

  h1 {
    font-size: 2.5rem;
    color: #ff758c;
  }

  h2 {
    font-size: 1rem;
    color: #ccc;
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

  footer {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  input {
    flex: 1;
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 1rem;
    background: #243b55;
    color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  input:focus {
    outline: none;
  }

  button {
    background: linear-gradient(90deg, #8e44ad, #3498db);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: linear-gradient(90deg, #3498db, #8e44ad);
  }

  button:disabled {
    background: #555;
    cursor: not-allowed;
  }
</style>

<div class="container">
  <header>
    <h1>Akhankhya AI</h1>
    <h2>Your Creative Partner in Thought</h2>
  </header>

  <div class="chat-window" bind:this={chatWindow}>
    {#each messages as message}
      <div class="chat-message {message.role === 'user' ? 'user-message' : 'ai-message'}">
        <div class="message-bubble">{message.content}</div>
      </div>
    {/each}

    {#if isLoading}
      <div class="ai-message chat-message">
        <div class="message-bubble">Typing...</div>
      </div>
    {/if}
  </div>

  <footer>
    <input
      type="text"
      placeholder="Type your message..."
      bind:value={userPrompt}
      on:keydown={(e) => e.key === "Enter" && generateContent()}
      disabled={isLoading}
    />
    <button on:click={generateContent} disabled={isLoading || !userPrompt}>
      Send
    </button>
  </footer>
</div>
