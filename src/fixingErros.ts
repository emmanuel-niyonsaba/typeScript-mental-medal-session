



//Before 

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

/*
function mergeObjects<T,U>(obj1:T, obj2:U):T&U {
  return { ...obj1, ...obj2 };
}

function getNestedValue<T>(obj:T, path:string):T {
  const keys = path.split('.');
  let value:any = obj;
  for (let key of keys) {
    value= value[key];
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
console.log(merged)
const street = getNestedValue(person, "address.street");
console.log(street)
*/


// question 4 form gate questions



// Before 

/*
const processRecipe = (recipe: number) => {
  console.log(recipe.ingredients);
};

processRecipe({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    { name: 'Flour', quantity: 4 },
    { name: 'Sugar', quantity: '1 cup', price: 5 },
  ],
  instructions: '...',
});


*/


//After fixing it

type  Ingingredients={
   name:string;
   quantity:string|number;
   price?:number; 
  }

type Recipe = {
  title:string;
  ingredients:Ingingredients[];
  instructions:string;
  };





const processRecipe = (recipe:Recipe) => {
  console.log(recipe.ingredients);
};

processRecipe({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    { name: 'Flour', quantity: 4 },
    { name: 'Sugar', quantity: '1 cup', price: 5 },
  ],
  instructions: '...',
});