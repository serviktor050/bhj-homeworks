const viewList = document.querySelector(".dropdown__list");
const mainMenuItem = document.querySelector(".dropdown__value");

function getMenuItem() {
    viewList.classList.add("dropdown__list_active");
    return false
}
mainMenuItem.addEventListener("click", getMenuItem);

const menuItems = document.getElementsByClassName("dropdown__item");
for (let i = 0; i < menuItems.length; i++) {
    menuItems.item(i).onclick = function() {
        mainMenuItem.textContent = menuItems.item(i).textContent;
        viewList.classList.remove("dropdown__list_active");
        return false        
    }
}