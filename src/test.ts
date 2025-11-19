
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


interface Employee {
    name: string;
    employeeId:number;

}
interface Manager{
        teamSize:number
}
type ManagerEmployee=Employee & Manager

function describeManagerEmployee(me: ManagerEmployee ) {
  return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }))