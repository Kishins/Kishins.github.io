

<script>

    let list = []
    let newtask ="" 
</script>

<title>Dementia Preventor</title>

<body>
<div class="background">
    
    <h2>To-Do List</h2>
        
    <input bind:value={newtask} id="skriv"> <button class="add" on:click={() => {list = [{done: false, task: newtask}, ...list]}}>Add Task 📝</button>
    <ul>
        {#each list as task , i}
        {#if !task.done}
        <li class="sak">

            {task.task + " 📃"} <button class="did" on:click={() =>{task.done=true; }} >Done!</button> <button class="remove" on:click={() =>{
                list.splice(i, 1);
                list = list;
            }}>❌</button>
            
        </li>
        {/if}

        {/each}

        <h1 id="done-text">
            Done ✔:
        </h1>
        {#each list as task , i}
        {#if task.done}
           
        <li class="done"> 
        
            {task.task + " ✅"} <button class="remove" on:click={() =>{
                list.splice(i, 1);
                list = list;
            }}>❌</button>
                
                
                
            
        </li> 
        {/if}
                
        {/each}
    </ul>
    
</div>

</body>

<style>
    .background {
        width: 100%;
        margin: auto;
        min-height: 100vh;
        background: linear-gradient(135deg, #702963, #E0B0ff);
        padding: 10px;
        text-align: center;
    }
    .add{
    border-radius: 20px;
    padding: 10px;
    
}


.add:hover{
    transition: background-color 0.5s ease-in-out; 
    background-color: orange;
   
}


.add:not(hover){
    transition: background-color 0.5s ease-in-out;
    background-color: white;
    
}
h2 {
    margin:auto;
    width: 50%;
    text-align: center;
  
    padding: 10px;

}
#done-text {
    margin:auto;
    width: 50%;
    text-align: center;
  
    padding: 10px;
}
.done{
    margin:auto;
    width: 50%;
    text-align: center;
  
    padding: 10px;
    background-color:rgba(82, 81, 81, 0.445);
    color: rgb(0, 255, 0);
}

.sak{
    display: block;
    background-color:rgba(192, 192, 192, 0.685);
    
}
.remove{
    
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    border: 1px solid black;
    padding-left: 4px;
    padding-right: 4px;
    padding: 5px;
    
    
    
}
.remove:hover{

    transition: background-color 0.1s ease-in-out;
    background-color: rgb(255, 0, 0);

}

.did{
    color: rgb(27, 216, 27);
}

.did:hover{
    transition: background-color 0.1s ease-in-out;
    background-color: rgb(27, 216, 27);
    transition: color 0.2s ease-in-out;
    color: rgb(0, 0, 0);
    
}
</style>
