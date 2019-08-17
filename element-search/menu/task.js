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