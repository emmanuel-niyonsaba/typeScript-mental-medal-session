// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
var describeInput = function (data) {
    if (typeof data === 'number') {
        return "The input type was Number";
    }
    else {
        return "The input type was String";
    }
};
console.log(describeInput("hello"));
