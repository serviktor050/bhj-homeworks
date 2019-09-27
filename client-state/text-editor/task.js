const textArea = document.getElementById("editor");

window.addEventListener("load", function() {
    if (localStorage.userText !== "") {
        textArea.value = localStorage.userText;
    }else {
        textArea.value = "";
    }
})

textArea.addEventListener("input", function() {
    localStorage.setItem("userText", "");
    localStorage.userText = textArea.value;
})