const textArea = document.getElementById("editor");

localStorage.setItem("userText", "");

if (localStorage.userText !== "") {
    textArea.value = localStorage.userText;
}

textArea.addEventListener("input", function() {
    localStorage.userText = textArea.value;
})