const products = document.querySelectorAll(".product");
const productQuantity = document.querySelectorAll(".product__quantity-value");
const cartWihtProducts = document.querySelector(".cart__products");

function addProductCart(id, item, image) {
  return `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${image}">
            <div class="cart__product-count">${item}</div>
        </div>`
}

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", function(event) {
        let targetItem = event.target;
        event.preventDefault();
        if (targetItem.classList.contains("product__quantity-control_dec")) {
            if (productQuantity.item(i).textContent > 1) {
                productQuantity.item(i).textContent--;
            }             
        }
        if (targetItem.classList.contains("product__quantity-control_inc")) {
            productQuantity.item(i).textContent++;     
        }

        if (targetItem.classList.contains("product__add")) {
            let target_image = targetItem.closest(".product").querySelector('.product__image').getAttribute('src');
            let target_id = targetItem.closest(".product").dataset.id;
            let target_value = targetItem.closest(".product").querySelector('.product__quantity-value').textContent;    
           
            if (cartWihtProducts.children.length !== 0) {
                if(cartWihtProducts.querySelector(`[data-id="${target_id}"]`)) {
                  cartWihtProducts.querySelector(`[data-id="${target_id}"]`).querySelector('.cart__product-count').textContent = Number(cartWihtProducts.querySelector(`[data-id="${target_id}"]`).querySelector('.cart__product-count').textContent) + Number(target_value);
                } else {
                  cartWihtProducts.innerHTML += addProductCart(target_id, Number(target_value), target_image);
                }              
            } else {
              cartWihtProducts.innerHTML += addProductCart(target_id, Number(target_value), target_image);
            }           
        }        
    })
}