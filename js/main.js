
"use strict"; //använd modern javascript

const LOCAL_STORAGE_KEY_TODOS = "app.todos.advanced";
let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)) || [];
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
   const deleteButton = document.createElement('button');
   deleteButton.innerText ='x';
   deleteButton.classList.add("delete-btn");
   todoDiv.appendChild(deleteButton);

   //append to list
   todoList.appendChild(todoDiv);

   //ta bort todo-input value
   todoInput.value= "";

}
function deleteCheck(e){
    const item = e.target;
    //ta bort todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
        updateList();
    }
}

function updateList() {
    saveList();
    listRoot.innerHTML = "";
    listRoot.append(todoList(todos));
  }
  
  function saveList() {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
  }
  
  updateList();