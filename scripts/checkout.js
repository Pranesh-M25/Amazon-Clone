import { renderOrderSummary } from "./Checkout/ordersummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { loadProducts } from "./products.js";
import { loadCart } from "./cart.js";
//import './cart-class.js'
//import './backend-practice.js';

new Promise((resolve) => {
  
  loadProducts(() => {
    
    resolve();
  });
}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
 
}).then(() =>  {
  renderOrderSummary();
  renderCheckoutHeader();
  renderPaymentSummary();
}); //a promise contains a inner function and the function runs immediately when the promise is created, and promise is a class. THe resolve parameter is also a function that let us to control when to go to the next step. .then is the next step that needs to be excecuted when we call resolve(). 

/* loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderCheckoutHeader();
    renderPaymentSummary();
  });
  }); */
 