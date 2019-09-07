const answearTexts = document.getElementsByClassName("has-tooltip");

for (let answearText of answearTexts) {
    answearText.insertAdjacentHTML("afterEnd", `<div class="tooltip">${answearText.title}</div>`);

    answearText.onclick = function(event) {
        event.preventDefault();
        if(!answearText.nextElementSibling.classList.contains("tooltip_active")) {
            answearText.nextElementSibling.classList.add("tooltip_active");
        } else {
            answearText.nextElementSibling.classList.remove("tooltip_active");
        }
    }
}