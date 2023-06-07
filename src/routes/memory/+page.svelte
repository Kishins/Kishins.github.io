<script>
  
  let images = ["https://cdn.shopify.com/s/files/1/0046/8575/8564/products/ace-of-spades-gold-canvas-art-clock-canvas-28308000374869_1946x.jpg?v=1626073575", "https://cdn.shopify.com/s/files/1/0046/8575/8564/products/ace-of-hearts-gold-canvas-art-clock-canvas-28726235365461_1946x.jpg?v=1639565711","https://cdn.shopify.com/s/files/1/0046/8575/8564/products/ace-of-clubs-canvas-gold-canvas-art-clock-canvas-28796418850901_1946x.jpg?v=1640669830", "https://cdn.shopify.com/s/files/1/0046/8575/8564/products/ace-of-diamonds-gold-canvas-art-clock-canvas-28802531491925_1946x.jpg?v=1640860450"]
  let startcardlength = images.length;
  let flip1 = 0;
  let flip2 = 0;
  
  
  for (let index=0; index < startcardlength; index++) {
      
      images.push(images[index]);
    }
  
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
     while (currentIndex != 0) {
  
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
  
       [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
     return array;
  }
  
  shuffle(images);
  
    
    let cards = [];
    for (let index = 0; index < images.length; index++) {
    
      cards.push({
        id: index,
        img: images[index],
        flipped: false,
        completed: false, 
        
      });
     
    }
    
    
    let flipcount = 0;
    function flip(card) {

    
      if (!card.flipped && flipcount < 2) {

        card.flipped = true;
        flipcount++;
  
        if(flipcount == 1){
          flip1 = card
        }
        if(flipcount == 2){
          flip2 = card
        }
        if(flip1.img==flip2.img){
                card.completed = true;
                flip1.completed = true;
              }
        
        

        if (flipcount == 2) {
          setTimeout(() => {

            cards.forEach((card) => {
            
              card.flipped = card.completed;
              if(card.completed){
                card.flipped = true;
              }
             
            });
            flipcount = 0;
            cards = cards;
          }, 2000);
        }
        cards = cards;
      } 
    }
    function redo(){
      shuffle(images);
      cards.forEach(card => {
        card.completed = false
        card.flipped = false
        cards = cards;
      });
      flipcount = 0;
    }
  </script>

  <body> 
    <title>Dementia Tester</title>
    <main>
  
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="https://opengameart.org/sites/default/files/card%20back%20black.png" alt="" />
        </div>
      {/each}
    </div>
    <button class="restart" on:click={()=> {redo()} }></button>  
  </main>
  </body>
  
  <style>
    body{
      background-image: url(https://img.freepik.com/premium-vector/poker-table-background-green-color_47243-1068.jpg);
      background-size: 100%;
    }

    .restart{
      size: 70px;
      padding: 80px;
      margin: 20%;
      margin-top: 50%;
      margin-right: 20%;
      position: absolute;
      background-size: 100%;
      background-color: black;
      border-radius: 50%;
      background-image: url(https://previews.123rf.com/images/sarahdesign/sarahdesign1506/sarahdesign150604660/41445149-reset-button.jpg);
    }
    main {
      padding-top: 10%;
      display: flex;
      place-content: center;
      place-items: center;
      
    }
    
  
    .row {
      align-items: center;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 150px);
      grid-template-rows: repeat(3, 150px);
      
    }
  
    .card {
      border: 1px solid black;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
  
    .card.flipped {
      transform: rotateY(180deg);
    }
  
    .card .back {
      transform: rotateY(0deg);
    }
  
    .card .front {
      transform: rotateY(180deg);
    }
  
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
  </style>
  