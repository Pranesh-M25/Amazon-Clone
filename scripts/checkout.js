import { renderOrderSummary } from "./Checkout/ordersummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import './cart-class.js'

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();