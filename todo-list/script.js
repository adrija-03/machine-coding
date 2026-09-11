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
    if(!task) return;
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

    const editBtn = document.createElement('button')
    editBtn.textContent = "edit"
    editBtn.addEventListener('click', () => {
        if(li.querySelector('input')) return;
        const editBox = document.createElement('input');
        editBox.type = 'text'
        const confirmBtn = document.createElement('button');
        confirmBtn.textContent = "confirm"
        li.appendChild(editBox)
        li.appendChild(confirmBtn)
        confirmBtn.addEventListener('click', (e) => {
            editTask(todoTask.id, editBox.value)
        })
    })

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "delete"
    deleteBtn.addEventListener('click', (e) => {
        deleteTask(todoTask.id)
    })
    
    todoListUI.appendChild(li)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
}

function deleteTask (deleteId) {
    todoList = todoList.filter(e => {
        return e.id != deleteId
    })
    showList()
}

function editTask (taskId, editedText) {
    todoList = todoList.map(e => {
        if(e.id == taskId) {
            return {...e, task: editedText}
        } else {
            return e
        }
    }) 
    showList()
}