// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
function formatUserTuple(user) {
    var name = user[0], age = user[1], active = user[2];
    return "".concat(name, " is ").concat(age, " years old and is ").concat(active ? "active" : "inactive");
}
console.log(formatUserTuple(["Bob", 35, false]));
console.log(formatUserTuple(["Alice", 28, true]));
