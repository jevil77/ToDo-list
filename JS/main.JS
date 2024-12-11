const addBtn = document.querySelector('#btn');
let count = 1;
document.querySelector('#count').innerHTML = count;
addBtn.addEventListener('click', addTask); // add a task on click



const taskCard = document.querySelector(".todoCard");

const tasksContenair = document.querySelector("#todoCards");

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function(){
    deleteTask(taskCard);

});


//





function addTask(){
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    
count++

//console.log(addTask);

document.querySelector('#count').innerHTML = count;



    newTextArea.value = "New task"  // set new task text to "New Task"
    newDelBtn.addEventListener('click', function(){
        deleteTask(newTask);

    });    
    
    tasksContenair.appendChild(newTask)  // append new task to the tasks container


}

function deleteTask(task){
    task.remove();
    count--
    document.querySelector('#count').innerHTML = count;
}





    

















