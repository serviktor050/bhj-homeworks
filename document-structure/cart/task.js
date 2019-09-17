const products = document.querySelectorAll(".product");
const productQuantity = document.querySelectorAll(".product__quantity-value");
const cartWihtProducts = document.querySelector(".cart__products");


for (let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", function(event) {
        let targetItem = event.target;
        if (targetItem.classList.contains("product__quantity-control_dec")) {
            event.preventDefault();
            if (productQuantity.item(i).textContent > 1) {
                productQuantity.item(i).textContent--;
            }else {
                productQuantity.textContent = 1;
            }            
        }
        if (targetItem.classList.contains("product__quantity-control_inc")) {
            event.preventDefault();
            productQuantity.item(i).textContent++;     
        }
        const addProductFirst = function() {
            return `<div class="cart__product" data-id="1">
            <img class="cart__product-image" src="https://sirop.club/carabi/image/7396863/256x256/fit/">
            <div class="cart__product-count">${productQuantity.item(i).textContent}</div>
        </div>`
        }
        const addProductSecond = function() {
            return `<div class="cart__product" data-id="2">
            <img class="cart__product-image" src="https://cs8.pikabu.ru/post_img/2017/09/21/6/150598626812465714.jpg">
            <div class="cart__product-count">${productQuantity.item(i).textContent}</div>
        </div>`
        }

        if (targetItem.classList.contains("product__add")) {
            event.preventDefault();                        
            if (targetItem.closest(".product").dataset.id === "1") {                
                if (cartWihtProducts.children.length === 0) {
                    cartWihtProducts.innerHTML += addProductFirst();
                }else {
                    for (let firstchildren of cartWihtProducts.children/*let m = 0; m < cartWihtProducts.children.length; m++*/) {
                        if (/*cartWihtProducts.children[m]*/firstchildren.dataset.id !== "1") {
                            cartWihtProducts.innerHTML += addProductFirst();
                        }else {
                            console.log(1);
                        }
                    }               
                }              
            }
            if (targetItem.closest(".product").dataset.id === "2") {
                if (cartWihtProducts.children.length === 0) {
                    cartWihtProducts.innerHTML += addProductSecond();
                }else {
                    for (let k = 0; k < cartWihtProducts.children.length; k++) {
                        if (cartWihtProducts.children[k].dataset.id !== "2") {
                            cartWihtProducts.innerHTML += addProductSecond();
                        }else {
                            console.log(2);
                        }
                    }
                }
            }           
        }        
    })
}