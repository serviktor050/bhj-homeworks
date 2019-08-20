const viewSubMenu = document.getElementsByClassName("menu_sub"); // Свернутый список
const changeButton = document.getElementsByClassName("menu__link"); //Анкор ссылки (кнопка)
let menuItem = document.querySelectorAll("ul.menu.menu_sub");

for (let i = 0; i < changeButton.length; i++) { //запускаем цикл по пунктам меню (выбранные кнопки)
    changeButton[i].addEventListener("click", function() {
        event.preventDefault();
        if (this.nextElementSibling.classList.contains("menu_sub") && this.nextElementSibling.classList.contains("menu_active")) {
            this.nextElementSibling.classList.remove("menu_active");
            console.log(this.nextElementSibling.classList)
            return false
        }
        if (this.nextElementSibling.classList.contains("menu_sub")) {
            this.nextElementSibling.classList.add("menu_active");
            console.log(this.nextElementSibling.classList)
            return false
        }        
    })
}