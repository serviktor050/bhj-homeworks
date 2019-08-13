const clicks = document.getElementById('clicker__counter');
const elementCookie = document.getElementById('cookie');

elementCookie.onclick = function() {
    clicks.textContent++;

    if (clicks.textContent % 2 === 0) {
        elementCookie.width -= 20;
        elementCookie.heigth -= 20;
    } else {
        elementCookie.width += 20;
        elementCookie.heigth += 20;
    }
}