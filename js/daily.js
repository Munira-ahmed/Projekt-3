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
    console.log("något");
}
