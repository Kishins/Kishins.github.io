<script>
    import { enhance } from "$app/forms";
    import { writable } from "svelte/store";
    import "elizabot";
    import ElizaBot from "elizabot";
    import { onMount, afterUpdate } from "svelte";
  
    let eliza = new ElizaBot();
    let scrollable;
    
    const chatStore = writable([]);

    const isLocalStorageAvailable = typeof localStorage !== "undefined";
    if (isLocalStorageAvailable) {
      const savedConversation = localStorage.getItem("chatConversation");
      if (savedConversation) {
        chatStore.set(JSON.parse(savedConversation));
      } else {

        chatStore.set([{ user: "eliza", text: eliza.getInitial() }]);
      }
    } else {

      chatStore.set([{ user: "eliza", text: eliza.getInitial() }]);
    }
  

    chatStore.subscribe((value) => {
      if (isLocalStorageAvailable) {
        localStorage.setItem("chatConversation", JSON.stringify(value));
      }
    });
  
    async function write(message) {

      const chat = $chatStore;

      chat.push({ user: "user", text: message });
      

      chatStore.set(chat);
  
      await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

      const botResponse = eliza.transform(message);
  

      chat.push({ user: "eliza", text: botResponse });
  
      chatStore.set(chat);
    }
  
    function scrollToBottom() {
      scrollable.scrollTop = scrollable.scrollHeight;
    }
  
    onMount(() => {
      scrollable = document.querySelector('.scrollable');
      scrollToBottom();
    });
  
    afterUpdate(() => {
      scrollToBottom();
    });

    function resetConversation() {
    chatStore.set([{ user: "eliza", text: eliza.getInitial() }]);
    }
  </script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </svelte:head>
  <title>Schizophrenia</title>


  <div class="container">
    <h1>TODO: Complete assignment</h1>
    <div class="scrollable">
      {#each $chatStore as message}
        <article>
          <span>{message.text}</span>
        </article>
      {/each}
    </div>
    <form
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
        cancel();
        const text = data.get("text");
        write(text);
        form.reset();
      }}
    >
      <input type="text" name="text" />
    </form>
    <button on:click={resetConversation}>Reset Conversation</button>
  </div>
  