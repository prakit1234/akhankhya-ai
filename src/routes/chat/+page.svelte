<script>
  import { onMount } from "svelte";
  import { supabase } from '$lib/auth';
  
  /**
     * @type {any[]}
     */
  let messages = [];
  let messageInput = "";
  
  // Fetch chat messages
  const fetchMessages = async () => {
    const { data } = await supabase.from("messages").select().order("created_at", { ascending: true });
    messages = data || [];
  };

  // Send a message
  const sendMessage = async () => {
    if (messageInput.trim() === "") return;
    
    // Add user message
    const userMessage = {
      content: messageInput,
      sender: "user",
      created_at: new Date(),
    };
    messages.push(userMessage);
    messageInput = ""; // Clear input

    // Save to the database
    await supabase.from("messages").insert([{
      content: messageInput,
      sender: "user",
      created_at: new Date(),
    }]);

    // Simulate chatbot response
    setTimeout(() => {
      const botMessage = {
        content: "This is a bot response to: " + userMessage.content,
        sender: "bot",
        created_at: new Date(),
      };
      messages.push(botMessage);
    }, 1000);
  };

  onMount(() => {
    fetchMessages();
  });
</script>

<div class="chat-container">
  <div class="chat-window">
    <div class="messages">
      {#each messages as message (message.created_at)}
        <div class={`message ${message.sender}`}>
          <div class="message-content">{message.content}</div>
        </div>
      {/each}
    </div>
    <div class="input-area">
      <textarea 
        bind:value={messageInput} 
        placeholder="Type a message..." 
        rows="1"
        on:keydown={(e) => { if (e.key === "Enter") sendMessage(); }}
      ></textarea>
      <button class="send-button" on:click={sendMessage}>Send</button>
    </div>
  </div>
</div>

<style>
  .chat-container {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #121212;
    color: white;
    font-family: 'Poppins', sans-serif;
  }

  .chat-window {
    background: #1e1e2f;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: flex-end;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    overflow-y: scroll;
    position: relative;
  }

  .messages {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .message {
    max-width: 70%;
    padding: 10px;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .message.user {
    background: #6a0dad;
    align-self: flex-end;
  }

  .message.bot {
    background: #8a2be2;
    align-self: flex-start;
  }

  .message-content {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .input-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    background: #333;
    color: white;
    border: none;
    resize: none;
    font-size: 1rem;
  }

  textarea:focus {
    outline: none;
  }

  .send-button {
    background: linear-gradient(45deg, #6a0dad, #8a2be2);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
  }

  .send-button:hover {
    background: linear-gradient(45deg, #8a2be2, #6a0dad);
  }
</style>
