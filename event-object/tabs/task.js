const menuItems = document.querySelectorAll(".tab");
const contentFields = document.querySelectorAll(".tab__content")

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {         
            
        if (this.previousElementSibling === null) {
            this.nextElementSibling.classList.remove("tab_active");
            this.classList.add("tab_active");
        }
        if (this.nextElementSibling === null) {
            this.previousElementSibling.classList.remove("tab_active");
            this.classList.add("tab_active");
        }
        if (this.previousElementSibling.classList.contains("tab_active")) {
            this.previousElementSibling.classList.remove("tab_active");
            this.classList.add("tab_active");
        }
        if (this.nextElementSibling.classList.contains("tab_active")) {
            this.nextElementSibling.classList.remove("tab_active");
            this.classList.add("tab_active");
        }
        for (let m = i; m < contentFields.length; m++) {
            if (contentFields.item(i - 1).classList.contains("tab__content_active")) {
                contentFields.item(i - 1).classList.remove("tab__content_active");
                contentFields.item(m).classList.add("tab__content_active");
            }
            if (contentFields.item(i + 1).classList.contains("tab__content_active")) {
                contentFields.item(i + 1).classList.remove("tab__content_active");
                contentFields.item(m).classList.add("tab__content_active");
            }  
        }        
    })
}