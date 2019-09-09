const tasksString = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

tasksString.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
        event.preventDefault();
        tasksList.innerHTML += writeTask();
        event.target.value = "";
    }    
})

const writeTask = function() {
    let textTask = event.target.value;
    return `<div class="task">
    <div class="task__title">
      ${textTask}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`
}

tasksList.addEventListener("click", function(event) {
    let target = event.target;
    if (target.classList.contains("task__remove")) {
        event.preventDefault();
        event.target.closest(".task").remove();
    }
})