const questions = document.getElementById("poll__title");
const answears = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let parsedData = JSON.parse(xhr.responseText);
        let dataAnswers = JSON.parse(xhr.responseText).data.answers;
        console.log(JSON.parse(xhr.responseText).data.answers);
        
        questions.innerText += parsedData.data.title;
        for (let i = 0; i < dataAnswers.length; i++) {
            answears.innerHTML += `<button class="poll__answer">
        ${dataAnswers[i]}
      </button>`
        }

        let buttons = document.getElementsByClassName("poll__answer");
        for (let button of buttons) {
            button.addEventListener("click", function() {
                alert("Ваш голос засчитан!")
            })
        }
    }
})