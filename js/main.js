
let addButton = document.querySelector(".todo-button");
let todoContainer = document.querySelector(".todo-container");
let inputField = document.querySelector(".todo-input");

//eventlisteners
e.preventDefault();
addButton.addEventListener('click', function(){
  var todoList = document.createElement("li");
todoListItem.innerText = item.name;
    todoListItem.setAttribute("data-id", item.id);
    todoListItem.classList.add("todo-list-item");
    todoListItem.addEventListener("click", removeItem);
    list.append(todoListItem);

});
function createTodo(name) {
  return {
    id: Date.now().toString(),
    name: name,
  };
/*//hämta olika html element 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//eventlisteners - gör saker beroende på ett event, tex en klick
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//document.addEventListener("DOMContentLoaded", getTodos);

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

function removeTodos(todo){
  let todos;
  if (localStorage.getItem("todos")=== null) {
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
//ger mig indexet & positionen på item i arrayen
const todoIndex = todo.children[0].innerText; 
todos.splice(todos.indexOf(todoIndex), 1); // splice tar bort något från en specifik array index
localStorage.setItem("todos", JSON.stringify(todos)); 
}*/