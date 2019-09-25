const popupWindow = document.getElementById("subscribe-modal");
const closeButton = document.querySelector(".modal__close");

window.addEventListener("load", function() {
    if(!getCookie("windowIsClosed")) {
        popupWindow.classList.add("modal_active");
    }
})

closeButton.addEventListener("click", function() {
    popupWindow.classList.remove("modal_active");
    document.cookie = "windowIsClosed=true";
})

const getCookie = (name) => {
    const valueCookie = "; " + document.cookie;
    let parts = valueCookie.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift()
    }
}