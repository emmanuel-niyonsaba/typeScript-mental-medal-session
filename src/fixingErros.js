function calculateTotal(items) {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        total += item.price;
    }
    return total.toFixed(2);
}
function applyDiscount(amount, discount) {
    var discountedAmount = amount - (amount * discount);
    return discountedAmount;
}
var products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 79 }
];
var total = calculateTotal(products);
console.log(total);
var discounted = applyDiscount(parseInt(total), 0.1);
console.log(discounted);
