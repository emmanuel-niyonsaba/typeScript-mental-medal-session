// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
// The second question 
// type dataT = number|string;
// const describeInput=(data:dataT)=>{
// if( typeof data==='number'){
//     return `The input type was Number ${data}`;
// }else{
//      return `The input type was String ${data}`;
// }
// }
// console.log(describeInput("hdjfhd"))
//the thrid question 
// interface User {
//     name:string;
//     age:number;
//     email:string
// }
// function introduceUser(user:User):string {
//   return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
// }
// console.log(introduceUser({ name: "Alice", age: 28, email: "alice@example.com" }));
//fourth question 
// enum Status{
//     Active=" The item is currently active",
//     Inactive =" The item is currently Inactive",
//     Pending ="The item is Pending review"
// }
// function getStatusMessage(data:Status):string {
//   return data
// }
// console.log(getStatusMessage(Status.Pending))
/// five question
// const getFirstElement=<T>(data:T[]):T|undefined=>{
//     return data[0];
// }
// console.log( getFirstElement<number>([1, 2, 3]));
// console.log(getFirstElement(["a", "b", "c"]))
// console.log(getFirstElement([{ id: 1 }, { id: 2 }]))
//6 question 
// interface Employee {
//     name: string;
//     employeeId:number;
// }
// interface Manager{
//         teamSize:number
// }
// type ManagerEmployee=Employee & Manager
// function describeManagerEmployee(me: ManagerEmployee ):string {
//   return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
// }
// console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }))
// 7 question 
// type func =(a:number,b:number)=>number;
// const add:func = (x, y) => x + y;
// const multiply:func = (x, y) => x * y;
// function applyOperation(a:number, b:number, operation:func):number {
// return  operation(a,b);
// }
// console.log(applyOperation(15,10,add))
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
///quesition 11 class with type annotation 
// class BankAccount {
//     private balance: number;
//     constructor(balance: number) {
//         this.balance = balance;
//     }
//     deposit(amount: number): void {
//         this.balance += amount;
//     }
//     withdraw(amount: number): boolean {
//         if (amount > this.balance) {
//             return false;
//         }
//         this.balance -= amount;
//         return true;
//     }
//     getBalance(): number {
//         return this.balance;
//     }
// }
// const account = new BankAccount(1000);
// account.deposit(500);
// console.log(account.getBalance());       // 1500
// console.log(account.withdraw(200));      // true
// console.log(account.getBalance());       // 1300
// console.log(account.withdraw(2000));     // false
// console.log(account.getBalance());       // 1300
//question 12 using the never type
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
function getColorCode(color) {
    if (Object.values(Color).includes(color)) {
        return "done";
    }
    else {
        throw console.error("Not done");
    }
}
console.log(getColorCode(Color.Green));
