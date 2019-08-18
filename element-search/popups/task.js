const form = document.getElementById("modal_main");
form.classList.add("modal_active");

const closeForm = document.getElementsByClassName("modal__close")
const firstCloseFormElement = closeForm.item(0);
firstCloseFormElement.onclick = function() {
    form.classList.remove("modal_active");
}

const changeButton = document.querySelector(".show-success");
const changedButton = document.getElementById("modal_success");
changeButton.onclick = function() {
    form.classList.remove("modal_active");
    changedButton.classList.add("modal_active");
}

const closeFormSecond = document.getElementsByClassName("modal__close_times")
const secondCloseFormElement = closeFormSecond.item(1);

secondCloseFormElement.onclick = function() {
    form.classList.remove("modal_active");
    changedButton.classList.remove("modal_active");
}