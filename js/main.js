const TODOS = "main.todos";
let todos = JSON.parse(localStorage.getItem(TODOS)) || [];
//hämta olika html element 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//eventlisteners - gör saker beroende på ett event, tex en klick
document.addEventListener("DOMContentLoaded", showTodos);// ska visa todo även fast sidan har updaterats
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
   //lägg todoinput.value till savetodo och pusha den in i todos
   saveTodos(todoInput.value);
   //ta bort  knapp
   const deleteButton = document.createElement('button');
   deleteButton.innerText ='x';
   deleteButton.classList.add("delete-btn");
   todoDiv.appendChild(deleteButton);

   //append to list
   todoList.appendChild(todoDiv);

    //ta bort todo-input value från input fältet
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

function saveTodos(todo) {

    todos.push(todo);
    localStorage.setItem(TODOS, JSON.stringify(todos));
}

//man ska kunna se todos på documentet om det är i arrayen
function showTodos(){
    todos.forEach(function(todo) { //nästan hela addtodo
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
   //skapa LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todo;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //ta bort  knapp
   const deleteButton = document.createElement('button');
   deleteButton.innerText ='x';
   deleteButton.classList.add("delete-btn");
   todoDiv.appendChild(deleteButton);
   //append to list
   todoList.appendChild(todoDiv);
  });
}

