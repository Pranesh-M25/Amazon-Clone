import { renderOrderSummary } from "./Checkout/ordersummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { loadProducts } from "./products.js";
//import './cart-class.js'
//import './backend-practice.js';

loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
