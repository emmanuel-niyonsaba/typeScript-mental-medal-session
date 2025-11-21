


// This contaians practical question for the gate


//question 1
/*
class Counter {
   static count:number = 0;

  increment(){
    Counter.count++;
  }

  static getCount():number{
    return Counter.count; 
  }
}

const newCount = new Counter();
newCount.increment()
newCount.increment()
newCount.increment()
newCount.increment()
console.log(Counter.getCount());

*/

//question 2
type Data= string | number | boolean | null | undefined
const processValue =(data:Data):any=>{
  if(typeof data =="string"){
    return data.toUpperCase();
  }
  else if(typeof data =="number"){
    return data*data;
  }
   else if(typeof data =="number"){
    return data*data;
  }
  else  if(typeof data =="boolean"){
    return !data;
  }else {
    throw console.error("invalid Data here! Check data well");
  }
}
console.log(processValue("name"))
console.log(processValue(12))
console.log(processValue(true))
console.log(processValue(null))
