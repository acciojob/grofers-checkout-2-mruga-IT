//your code here
const prices = document.querySelectorAll('[data-ns-test="prices"]');
let totalPrice = 0;

// loop through all prices and add them up
for (let i = 0; i < prices.length; i++) {
  totalPrice += parseFloat(prices[i].textContent);
}

// create new row for total price and add to table
const table = document.getElementById('grocery-list');
const newRow = table.insertRow();
const newCell = newRow.insertCell();
newCell.colSpan = 2;
newCell.textContent = 'Total Price: $' + totalPrice.toFixed(2);

// set data attribute for total price row
newRow.setAttribute('data-ns-test', 'grandTotal');
