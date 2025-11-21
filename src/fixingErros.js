//Before 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total.toFixed(2);
}

function applyDiscount(amount, discount) {
  const discountedAmount = amount - (amount * discount);
  return discountedAmount;
}

const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 79 }
];

const total = calculateTotal(products);
const discounted = applyDiscount(total, 0.1);





*/
//After fixing erros
/*
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


*/
/// question 18 finxing object errors
//Before
/*
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function getNestedValue(obj, path) {
  const keys = path.split('.');
  let value = obj;
  for (let key of keys) {
    value = value[key];
  }
  return value;
}

const person = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

const updates = { age: 30, city: "Boston" };
const merged = mergeObjects(person, updates);
const street = getNestedValue(person, "address.street");
*/
/// After fixing
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
function getNestedValue(obj, path) {
    var keys = path.split('.');
    var value = obj;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        value = value[key];
    }
    return value;
}
var person = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
var updates = { age: 30, city: "Boston" };
var merged = mergeObjects(person, updates);
console.log(merged);
var street = getNestedValue(person, "address.street");
console.log(street);
