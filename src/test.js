// This is was the first question 
// const add =(a:number,b:number):number=>{
// return a+b;
// }
// console.log(add(3.5,2.5))
function describeManagerEmployee(me) {
    return "".concat(me.name, " (ID: ").concat(me.employeeId, ") manages a team of ").concat(me.teamSize, " people");
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));
