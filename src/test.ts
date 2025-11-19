
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


enum Status{
    Active="active",
    Inactive ="Inactive",
    Pending ="Pending"
}
function getStatusMessage(data:Status):string {
  return `The item is currently ${data}`
}


console.log(getStatusMessage(Status.Pending))