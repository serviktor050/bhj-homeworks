const bookReader = document.getElementById("book");
const wordSizeButton = document.querySelectorAll(".font-size");

for (let i = 0; i < wordSizeButton.length; i++) {
    wordSizeButton[i].addEventListener("click", function() {
        event.preventDefault();
        for (let m = 0; m < wordSizeButton.length; m++) {
            wordSizeButton[m].classList.remove("font-size_active");
            if (bookReader.classList.contains("book_fs-big")) {
                bookReader.classList.remove("book_fs-big");
            }
            if (bookReader.classList.contains("book_fs-small")) {
                bookReader.classList.remove("book_fs-small");
            }
        }
        wordSizeButton[i].classList.add("font-size_active");
        if (wordSizeButton.item(0).classList.contains("font-size_active")) {
            bookReader.classList.add("book_fs-small");
        }
        if (wordSizeButton.item(2).classList.contains("font-size_active")) {
            bookReader.classList.add("book_fs-big");
        }
    })
}