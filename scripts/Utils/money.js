export { currencyFormat };

function currencyFormat(priceCents) {
  return (priceCents / 100).toFixed(2);
}

