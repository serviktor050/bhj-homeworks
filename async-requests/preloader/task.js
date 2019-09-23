let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("loader").classList.remove("loader_active");

        let parsedResponseTextValute = JSON.parse(xhr.responseText).response.Valute;
        
        for (let i in parsedResponseTextValute) {

            const data = function() {
                return `<div class="item">
                <div class="item__code">
                    ${parsedResponseTextValute[i].CharCode}
                </div>
                <div class="item__value">
                    ${parsedResponseTextValute[i].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`
            }

            document.getElementById("items").innerHTML += data();
        }       
    }
})