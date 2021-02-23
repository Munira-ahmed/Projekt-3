//hämta olika html element 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//eventlisteners - gör saker beroende på ett event, tex en klick
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event) {
    //stoppar formen från att skickas
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
   //skapa LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

   //ta bort  knapp
   const completeButton = document.createElement('button');
   completeButton.innerText ='x';
   completeButton.classList.add("complete-btn");
   todoDiv.appendChild(completeButton);

   //append to list
   todoList.appendChild(todoDiv);

   //clear todo-input value
   todoInput.value= "";

}


function deleteCheck(e){
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
 
}


/*//hämta olika html element 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//eventlisteners - gör saker beroende på ett event, tex en klick
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodos);
todoInput.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    return;
  }

//functions¨

function addTodo(event) {
    //stoppar formen från att köras
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

   //skapa LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value.trim();
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

    // Lägg till i local todos
    saveTodos(todoInput.value);

   //ta bort  knapp
   const deleteButton = document.createElement('button');
   deleteButton.innerText ='x';
   deleteButton.classList.add("delete-btn");
   todoDiv.appendChild(deleteButton);

   //append to list
   todoList.appendChild(todoDiv);

   //ta bort todo-input value
   todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //ta bort todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();    
}
}



function saveTodos(todo) {
  //har jag redan något där inne?
  let todos;
  if (localStorage.getItem("todos")=== null) {
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}


function getTodos() {
 
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo){
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

 //skapa LI
 const newTodo = document.createElement("li");
 newTodo.innerText = todo;
 newTodo.classList.add("todo-item");
 todoDiv.appendChild(newTodo);
 //ta bort  knapp
 const deleteButton = document.createElement('button');
 deleteButton.innerText ='x';
 deleteButton.classList.add("delete-btn");
 todoDiv.appendChild(deleteButton);
 //append to list
 todoList.appendChild(todoDiv);
})
}
*/ 