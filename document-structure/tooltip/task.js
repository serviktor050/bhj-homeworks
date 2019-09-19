const answearTexts = document.getElementsByClassName("has-tooltip");

for (let i = 0; i < answearTexts.length; i++) {
    let placeAnswearTexts = answearTexts[i].getBoundingClientRect();
    let answearTheQuestion = `<div class="tooltip tooltip_active" style="left:${placeAnswearTexts.x}px">${answearTexts[i].title}</div>`;

    answearTexts[i].addEventListener("click", function(event) {
        event.preventDefault();
        if(!event.target.nextElementSibling.classList.contains("tooltip_active")) {
            event.target.insertAdjacentHTML("afterEnd",answearTheQuestion)
        }else {
            event.target.nextElementSibling.remove();
        }
    })
}