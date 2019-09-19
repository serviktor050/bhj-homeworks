const tasksString = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const button = document.getElementById("tasks__add");

const writeTask = function() {
    let textTask = tasksString.value;
    return `<div class="task">
    <div class="task__title">
      ${textTask}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`
}

tasksString.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 && tasksString.value !== "") {
        event.preventDefault();
        tasksList.innerHTML += writeTask();
        tasksString.value = "";
    }    
})

button.addEventListener("click", function(event) {
    event.preventDefault();
    if (tasksString.value !== "") {
        tasksList.innerHTML += writeTask();
        tasksString.value = "";
    }    
})

tasksList.addEventListener("click", function(event) {
    let target = event.target;
    if (target.classList.contains("task__remove")) {
        event.preventDefault();
        event.target.closest(".task").remove();
    }
})