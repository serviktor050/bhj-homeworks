const viewSubMenu = document.getElementsByClassName("menu_sub"); // Свернутый список
const changeButton = document.getElementsByClassName("menu__link"); //Анкор ссылки (кнопка)
let menuItem = document.querySelectorAll("ul.menu.menu_sub");

for (let i = 0; i < changeButton.length; i++) { //запускаем цикл по пунктам меню (выбранные кнопки)
    let changedButton = changeButton.item(i);
    changedButton.onclick = function() { //запускаем функцию на кнопке
        for (let m = 0; m < viewSubMenu.length; m++) {
            if (document.changeButton(i).nextElementSibling.includes("menu_sub") === true) { //содержит ли элемент сосед необходимый класс
            viewSubMenu.item(m).classList.add("menu_active");
            return false
           }   
        }      
    }
}

/*viewSubMenu.item(m).classList.add("menu_active");
                return false
    /*viewSubMenu.item(1).classList.add("menu_active");
        return false
         {
            viewSubMenu.item(m).classList.add("menu_active");
            return false
        } */  

/*-----------------------------------------------------------*/
/*
const viewSubMenu = document.getElementsByClassName("menu_sub");

const aboutCompanyViewSubMenu = viewSubMenu.item(0);
const serviceViewSubMenu = viewSubMenu.item(1);

const changeButton = document.getElementsByClassName("menu__link")

const aboutCompanyChangedButton = changeButton.item(1);

aboutCompanyChangedButton.onclick = function() {
    aboutCompanyViewSubMenu.classList.add("menu_active");
    return false
}

const serviceChangedButton = changeButton.item(5);

serviceChangedButton.onclick = function() {
    serviceViewSubMenu.classList.add("menu_active");
    return false
}
*/