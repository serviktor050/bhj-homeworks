const texts = document.getElementsByClassName("rotator__case");
const firstText = texts.item(0);
const lastText = texts.item(texts.length - 1);

const getRotateText = function() {
  const textActive = document.querySelector(".rotator__case_active");
  const nextTextActive = textActive.nextElementSibling;

  if (nextTextActive == null) {
    firstText.classList.add("rotator__case_active");
    lastText.classList.remove("rotator__case_active");
  }else {
    textActive.classList.remove("rotator__case_active");
    nextTextActive.classList.add("rotator__case_active");
  }
}

let rotateText = setInterval(getRotateText, 1000);