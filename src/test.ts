
// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))


// The second question 
type dataT = number|string;

const describeInput=(data:dataT)=>{
if( typeof data==='number'){
    return `The input type was Number ${data}`;
}else{
     return `The input type was String ${data}`;
}
}
console.log(describeInput("hdjfhd"))