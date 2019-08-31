const chat = document.querySelector(".chat-widget");
const messageString = document.querySelector(".chat-widget__input")
const messages = document.querySelector(".chat-widget__messages");

chat.addEventListener("click", function() {
    if (!chat.classList.contains("chat-widget_active")) {
        chat.classList.add("chat-widget_active");
    }
})

messageString.addEventListener("keydown", function(event) {
    if(event.keyCode === 13 && event.target.value !== "") {     
        messages.innerHTML += writeMessage();
        event.target.value = "";
        messages.innerHTML += writeRobotMessage();
    }
})

const robotAnswear = [
    "Привет!",
    "Здесь нет никого!",
    "Это все матрица!",
]

const writeMessage = function() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let textMessage = event.target.value;

    return `<div class="message message_client">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">${textMessage}</div>
    </div>`
}

const writeRobotMessage = function() {
    let hoursRobotMessage = new Date().getHours();
    let minutesRobotMessage = new Date().getMinutes();
    const random = Math.floor(Math.random()*robotAnswear.length);
    robotsTextMessage = robotAnswear[random];

    return `<div class="message">
        <div class="message__time">${hoursRobotMessage}:${minutesRobotMessage}</div>
        <div class="message__text">${robotsTextMessage}</div>
    </div>`
}  