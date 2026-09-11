const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector("#add-btn")
const todoListUI = document.querySelector("#todo-list-ui")

let todoList = []
let nextId = 1;

addBtn.addEventListener('click', () => {
    addTodo()
})

function addTodo () {
    const task = todoInput.value.trim();
    todoList.push({ id: nextId++, task})
    todoInput.value = ""
    showList()
    console.log(todoList)
}

function showList () {
    todoListUI.innerHTML = "";
    todoList.forEach((element) => {
        return createLi(element)
    })
}

function createLi (todoTask) {
    const li = document.createElement('li')
    li.textContent = todoTask.task;

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "delete"
    deleteBtn.addEventListener('click', (e) => {
        deleteTask(todoTask.id)
    })
    
    todoListUI.appendChild(li)
    li.appendChild(deleteBtn)
}

function deleteTask (deleteId) {
    todoList = todoList.filter(e => {
        return e.id != deleteId
    })
    showList()
}