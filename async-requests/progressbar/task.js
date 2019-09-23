const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.addEventListener("progress", function(event) {
        progress.value = (event.loaded / 100000000).toFixed(3);            
    })
    const formData = new FormData(form);
    xhr.send(formData);
})