const taskInput = document.querySelector('.task_new')
const addBtn = document.querySelector('#add-btn')
const incompleteNode = document.querySelector('#incomplete-tasks')
const completeNode = document.querySelector('#completed-tasks')

function createNewTask(taskString, isChecked) {
    const listItem = document.createElement("li")
    const checkBox = document.createElement("input")
    const label = document.createElement("label")
    const editInput = document.createElement("input")
    const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")
    const deleteButtonImg = document.createElement("img")

    listItem.className = "task"

    label.innerText = taskString
    label.className = "task__label"

    checkBox.type = "checkbox"
    checkBox.className = "task__check"
    checkBox.checked = isChecked

    editInput.type = "text"
    editInput.className = "task__input"

    editButton.innerText = "Edit"
    editButton.className = "btn"
    editButton.id = "edit-btn"

    deleteButton.className = "btn"
    deleteButton.id = "delete-btn"
    deleteButtonImg.src = "./remove.svg"
    deleteButtonImg.className = "btn_delete-img"
    deleteButton.appendChild(deleteButtonImg)

    editButton.addEventListener('click', editTask)
    deleteButton.addEventListener('click', deleteTask)
    checkBox.addEventListener('click', compleleTask)

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)
    return listItem;
}

function editTask() {
    const thisItem = this.parentNode
    const thisInput = this.parentNode.querySelector('.task__input')
    const thisLabel = this.parentNode.querySelector('.task__label')
    const thisCheck = this.parentNode.querySelector('.task__check')
    
    
    thisItem.classList.toggle('edit-mode')

    if (thisItem.classList.contains('edit-mode')) {
        thisCheck.setAttribute('disabled', 'disabled')
        this.innerText = "Save"
        thisInput.value = thisLabel.textContent        
    } else {
        thisCheck.removeAttribute('disabled')
        this.innerText = "Edit"
        thisLabel.textContent = thisInput.value
    }
}

function deleteTask() {
    const thisItem = this.parentNode;
    const parentItem = thisItem.parentNode;   
    parentItem.removeChild(thisItem)
}

function compleleTask() {
    const isChecked = this.checked
    const thisItem = this.parentNode;
    const parentItem = thisItem.parentNode;   

    const thisTaskValue = this.parentNode.querySelector('.task__label').textContent 
    
    parentItem.removeChild(thisItem)
    console.log(isChecked);

    if (!isChecked) {
        incompleteNode.appendChild(createNewTask(thisTaskValue, false))
    } else {
        completeNode.appendChild(createNewTask(thisTaskValue, true))
    }
}

//Listeners
 addBtn.addEventListener('click', () => {
    const text = taskInput.value

    if (text) {
        incompleteNode.appendChild(createNewTask(text, false))
        taskInput.value = ''
    }
 })

 //add demo
 //добавить невыполненную не в режиме редакт
 //добавить невыполненную в режиме редакт
 //добавить выполненную