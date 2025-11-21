// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
function getProperty(obj, key) {
    return obj[key];
}
var user = {
    name: "Ted",
    age: 17,
    email: "ted@example.com"
};
console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
console.log(getProperty(user, "email"));
