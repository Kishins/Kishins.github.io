<script>
    let story = {
      current: 0,
      scenes: [
        {
          text: "You wake up in a mysterious room. What do you do?",
          choices: [
            { text: "Examine the room", image: "https://t3.ftcdn.net/jpg/00/32/43/22/360_F_32432298_tcab9WtNdhOisxJ8161tJ4xQbub6g1fQ.jpg", next: 1 },
            { text: "Open the door", image: "https://as2.ftcdn.net/v2/jpg/04/39/30/35/1000_F_439303517_e2obstOEh700lZNkd4U8GCqqhkKCjVUD.jpg", next: 3 }
          ]
        },
        {
          text: "You find a key in the drawer. What do you do?",
          choices: [
            { text: "Unlock the door", image: "https://media.istockphoto.com/id/1056497700/photo/hand-unlocking-rustic-door-of-wooden-church-with-a-big-key.jpg?s=612x612&w=0&k=20&c=IficAGNHVXDHx0hll2FJRhs3n1ltEZj5DV6NLTFG32Y=", next: 4 },
            { text: "Keep searching the room", image: "search.jpg", next: 2 }
          ]
        },
        {
          text: "A monster attacks you for being so slow!",
          choices: [
            { text: "Reset", image: "https://images.pond5.com/evil-fanged-monster-attack-creepy-152412582_prevstill.jpeg", next: 0 },
          ]
        },
        {
          text: "The door is locked. What do you do?",
          choices: [
            { text: "Break the door", image: "https://images.squarespace-cdn.com/content/v1/57c63118b8a79ba9708bdc76/1479692620919-7MJV3O1MH7AMXL6HR1ZN/padlock-door-lock-key-hole-67537.jpeg?format=1000w", next: 5 },
            { text: "Give up and wait", image: "wait.jpg", next: 2 }
          ]
        },
        {
          text: "You successfully unlock the door and run away outside.",
          choices: [
            { text: "Reset", image: "https://hips.hearstapps.com/hmg-prod/images/claude-monets-house-and-gardens-in-giverny-france-news-photo-1042013294-1562610151.jpg?crop=1.00xw:0.753xh;0,0.0671xh&resize=1200:*", next: 0 },
          ]
        },
        {
          text: "The door was far more fragile than you thought! You fall down a hole and die, impaled on spikes.",
          choices: [
            { text: "Reset", image: "https://static.tvtropes.org/pmwiki/pub/images/dnd_forgotte_realms_spike_trap.png", next: 0 },
          ]
        }
      ]
    };
  
    let currentScene = story.scenes[story.current];
    let currentImage = currentScene.choices[0].image;
  
    function makeChoice(index) {
      story.current = currentScene.choices[index].next;
      currentScene = story.scenes[story.current];
      currentImage = currentScene.choices[0].image;
    }
  </script>
  <title>Telltale</title>
  <main>
    <h1>{currentScene.text}</h1>
    <img src={currentImage} alt="Scene" width="300" height="200">
    <div class="choices">
      {#each currentScene.choices as choice, i}
        <button on:click={() => makeChoice(i)}>{choice.text}</button>
      {/each}
    </div>
  </main>

  
  <style>
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
    }
  
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    img {
      margin-bottom: 20px;
    }
  
    .choices {
  
      flex-direction: column;
      gap: 10px;
    }
  </style>
  