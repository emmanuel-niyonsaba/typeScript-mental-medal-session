// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
function introduceUser(user) {
    return "Hello, my name is ".concat(user.name, ", I am ").concat(user.age, " years old, and my email is ").concat(user.email);
}
console.log(introduceUser({ name: "Alice", age: 28, email: "alice@example.com" }));
