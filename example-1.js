// Run the code here, no problems?

function getPriceWithTax(amount, rate) {
  const price = amount.toFixed(2);
  const tax = price * rate;
  return price + tax;
}

const answer = getPriceWithTax(23.99, 9.5);
console.log(answer);

// Run the code here and look at the results
// Does it look right?
// What went wrong?

// The type for price is string so it cant be used in a math format that is why it looks wrong and didn't work.