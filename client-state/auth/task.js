document.querySelector(".signin").classList.add("signin_active");

const form = document.getElementById("signin__form");
const button = document.getElementById("signin__btn");
const welcomeWindow = document.getElementById("welcome");
const userNumber = document.getElementById("user_id");

button.addEventListener("click", function(event) {
  event.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const parsedSuccess = JSON.parse(xhr.responseText).success;
      const parsedUserId = JSON.parse(xhr.responseText).user_id;
      if(parsedSuccess === true) {
        localStorage = ("user_id","");
        localStorage.user_id = parsedUserId;
        }
        if(parsedSuccess === true && localStorage.user_id !== null) {
          document.querySelector(".signin").classList.remove("signin_active");
          userNumber.textContent = localStorage.user_id
          welcomeWindow.classList.add("welcome_active");          
          }else if(parsedSuccess === false) {
            alert("Неверный логин/пароль");
          }
      }
    })
  xhr.send(formData);
})