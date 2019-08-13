const timeSeconds = document.getElementById('timer');

const timer = function() {
    if (timeSeconds.textContent > 0) {
        timeSeconds.textContent = timeSeconds.textContent - 1;
    } else {
        alert('Вы победили в конкурсе!')        
    }
} 

setInterval(timer, 1000)