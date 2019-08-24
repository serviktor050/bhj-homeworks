const menuItems = document.querySelectorAll(".tab");
const contentFields = document.querySelectorAll(".tab__content")

for (let i = 0; i < menuItems.length; i++) {    
    menuItems[i].addEventListener("click", function() {
        for (let m = 0; m < menuItems.length; m++) {
            menuItems[m].classList.remove("tab_active");
            contentFields[m].classList.remove("tab__content_active");
        };
        menuItems[i].classList.add("tab_active");
        contentFields[i].classList.add("tab__content_active");
    })
}