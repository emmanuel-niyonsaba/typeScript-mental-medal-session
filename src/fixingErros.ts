
function calculateTotal(items:{
    name:string;
    price:number
}[]):string {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total.toFixed(2);
}

function applyDiscount(amount:number, discount:number):number {
  const discountedAmount = amount - (amount * discount);
  return discountedAmount;
}

const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 79 }
];

const total = calculateTotal(products);
console.log(total);
const discounted = applyDiscount(parseInt(total), 0.1);
console.log(discounted);