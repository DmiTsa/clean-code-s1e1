//Проблема: взаимодействие с пользователем не обеспечивает правильных результатов.
//Решение: добавьте интерактивности, чтобы пользователь мог управлять ежедневными задачами.
//Разбейте все на более мелкие шаги и выполняйте каждый шаг за раз.


const taskInput = document.querySelector('.task_new')
const addBtn = document.querySelector('#add-btn')
const incompleteNode = document.querySelector('#incomplete-tasks')
const completeNode = document.querySelector('#completed-tasks')

// let idCounter = 0;
// let tasks = [{id: '905', status: 'incomplete', string: 'test status'}]

// var createNewTaskElement=function(taskString){
function createNewTask(taskString) {
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

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)
    return listItem;
}

var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    if (!taskInput.value) return;
    var listItem=createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task.

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


//Mark task completed


// var taskCompleted=function(){
//     console.log("Complete Task...");

//     //Append the task list item to the #completed-tasks
//     var listItem=this.parentNode;
//     completedTasksHolder.appendChild(listItem);
//     bindTaskEvents(listItem, taskIncomplete);

// }

var taskIncomplete=function(){
    console.log("Incomplete Task...");
//Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incompleteTasks.
    var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}

var ajaxRequest=function(){
    console.log("AJAX Request");
}



// addButton.onclick=addTask;
// addButton.addEventListener("click",addTask);
// addButton.addEventListener("click",ajaxRequest);
 addBtn.addEventListener('click', () => {
    const text = taskInput.value

    if (text) {
        incompleteNode.appendChild(createNewTask(text))
        taskInput.value = ''
    }
 })



var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    var editButton=taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");


    //Bind editTask to edit button.
    editButton.onclick=editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick=deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item

// for (var i=0; i<incompleteTaskHolder.children.length;i++){

//     //bind events to list items chldren(tasksCompleted)
//     bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
// }




//cycle over completedTasksHolder ul list items

// for (var i=0; i<completedTasksHolder.children.length;i++){
//     //bind events to list items chldren(tasksIncompleted)
//     bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
// }




// Проблемы с удобством использования не видны, пока они не окажутся перед человеком-тестером.

//предотвращайте создание пустых задач.

//Измените редактирование на сохранение, когда вы находитесь в режиме редактирования.