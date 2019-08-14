const deadMole = document.getElementById('dead');
const liveMole = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`);
    function getHole(i) {
        return hole
    }
    getHole(i);
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole') == true) {
            deadMole.textContent++;
        } else {
            liveMole.textContent++;
        }

        if (deadMole.textContent == 10) {
            alert ('Вы победили!');
            deadMole.textContent = 0;
            liveMole.textContent = 0;
        }
        
        if (liveMole.textContent == 5) {
            alert ('Вы проиграли');
            deadMole.textContent = 0;
            liveMole.textContent = 0;
        }
    }
}