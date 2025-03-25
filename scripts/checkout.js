import { cart, removeFromCart, calculateCartQuantity, updateQuantity, } from "../scripts/cart.js";
import { products } from "../scripts/products.js";
import { currencyFormat } from "./Utils/money.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://cdn.skypack.dev/dayjs@1.11.10';
import 'https://cdn.skypack.dev/dayjs@1.11.10/locale/en'; // For locale support
dayjs.locale('en'); // Activate English locale


hello();
const today = dayjs(); 
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));



let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>
      <div class="cart-item-details-grid">
        <img src="${matchingProduct.image}" class="product-image">
        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${currencyFormat(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input-${matchingProduct.id}" type="number" value="${cartItem.quantity}">
            <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">
              Save
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;



document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    if (container) {
      container.remove();
    } else {
      console.error(`Container not found for productId: ${productId}`);
    }
    updateCartQuantity();
  });
});

function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector('.js-items-header').innerHTML = `${cartQuantity} items`;
  document.querySelectorAll('.js-cart-quantity').forEach((element) => {
    element.innerHTML = cartQuantity;
  });
}

updateCartQuantity();

document.querySelectorAll('.js-update-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    
      container.classList.add('is-editing-quantity');
    
  });
});

document.querySelectorAll('.js-save-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
   
    

    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
    const newQuantity = Number(quantityInput.value);

    if(newQuantity < 0 || newQuantity >= 1000){
      alert('Quantity must be at least 0 and less than 1000');
      return;
    }
    updateQuantity(productId, newQuantity);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.classList.remove('is-editing-quantity');

    const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
   
      quantityLabel.innerHTML = newQuantity;
    

    
    

    updateCartQuantity();
  });
});