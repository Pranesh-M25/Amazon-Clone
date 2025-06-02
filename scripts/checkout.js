import { renderOrderSummary } from "./Checkout/ordersummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "./products.js";
import { loadCart } from "./cart.js";
// import './cart-class.js'
// import './backend-practice.js';

async function loadPage() {

  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  });


  renderOrderSummary();
  renderCheckoutHeader();
  renderPaymentSummary();

} 
loadPage();
// async makes a function return a promise automatically
// await makes the code wait for the promise to complete before continuing, while using await we do not need to use .then() and await can only be used inside an async function.

/*
Promise.all([
 loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderCheckoutHeader();
    renderPaymentSummary();
}); 
*/


/*new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1'); //value1 acts acts as a parameter in .then function.
  });

})
  .then((value) => {
    console.log(value);
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });

  })
  .then(() => {
    renderOrderSummary();
    renderCheckoutHeader();
    renderPaymentSummary();
  }); */

// A promise contains an inner function, and the function runs immediately when the promise is created.
// A promise is a class. The resolve parameter is also a function that lets us control when to go to the next step.
// .then is the next step that needs to be executed when we call resolve().

/* 
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderCheckoutHeader();
    renderPaymentSummary();
  });
});
*/
