//hämta olika html element 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoItem = document.querySelector(".todo-item");

//eventlisteners - gör saker beroende på ett event, tex en klick
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

//functions
function addTodo(event) {
    //stoppar formen från att skickas
    event.preventDefault();
   if (todoInput.value.trim() === "") {
    return;
    }
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
   //skapa LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
  
   //ta bort  knapp
   const deleteButton = document.createElement('button');
   deleteButton.innerText ='x';
   deleteButton.classList.add("delete-btn");
   todoDiv.appendChild(deleteButton);
   

   //append to list
   todoList.appendChild(todoDiv);
   
   
   //clear todo-input value
   todoInput.value= "";
}


function deleteTodo(e){
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}






