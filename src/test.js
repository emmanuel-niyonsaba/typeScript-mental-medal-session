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
function move(direction) {
    switch (direction) {
        case "north":
            return { x: 0, y: 1 };
        case "south":
            return { x: 0, y: -1 };
        case "east":
            return { x: 1, y: 0 };
        case "west":
            return { x: -1, y: 0 };
    }
}
console.log(move("west"));
console.log(move("north"));
