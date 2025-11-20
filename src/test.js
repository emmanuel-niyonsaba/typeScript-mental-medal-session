// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BankAccount_Balance;
var add = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };
function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(15, 10, add));
//done with dto day exercises;
//quesiton 8 about type guard 
// type dataFormat = String|number|boolean;
// function processValue(value:dataFormat):string {
//  if( typeof value ==='string'){
// return `The String value is ${value.toUpperCase()}`
//  }else if( typeof value ==="number"){
//     return `The vaule number is: ${value*value}`
//  }else{
//     return `The value boolean is : ${!value }`
//  }
// }
// console.log(processValue("hello"))
// console.log(processValue(5))
// console.log(processValue(true))
//question 9 Readonly propeteties 
// interface Config{
//     readonly apiUrl:string;
//     readonly timeout:Number;
// }
// const config: Config = {
//   apiUrl: "https://api.example.com",
//   timeout: 5000
// };
//  config.apiUrl = "https://api.newsite.com"; 
///qeustion 10   Literal types
// type Direction= "north"|"south"|"east"|"west";
// function move(direction:Direction) {
//   switch(direction) {
//     case "north":
//       return { x: 0, y: 1 };
//     case "south":
//       return { x: 0, y: -1 };
//     case "east":
//       return { x: 1, y: 0 };
//     case "west":
//       return { x: -1, y: 0 };
//   }
// }
// console.log(move("west"));
// console.log(move("north"))
///quesition 11
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        _BankAccount_Balance.set(this, void 0);
        __classPrivateFieldSet(this, _BankAccount_Balance, balance, "f");
    }
    BankAccount.prototype.deposit = function (amount) {
        return __classPrivateFieldGet(this, _BankAccount_Balance, "f") + amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > __classPrivateFieldGet(this, _BankAccount_Balance, "f")) {
            return false;
        }
        else {
            return __classPrivateFieldGet(this, _BankAccount_Balance, "f") - amount;
        }
    };
    return BankAccount;
}());
_BankAccount_Balance = new WeakMap();
var newBlance = new BankAccount(1000);
console.log(newBlance.deposit(500));
console.log(newBlance.withdraw(200));
console.log(newBlance.withdraw(2000));
