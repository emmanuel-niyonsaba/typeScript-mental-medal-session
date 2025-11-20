// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
var add = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };
function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(15, 10, add));
function processValue(value) {
    if (typeof value === 'string') {
        return "The String value is ".concat(value.toUpperCase());
    }
    else if (typeof value === "number") {
        return "The vaule number is: ".concat(value * value);
    }
    else {
        return "The value boolean is : ".concat(!value);
    }
}
console.log(processValue("hello"));
console.log(processValue(5));
console.log(processValue(true));
