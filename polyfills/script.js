//Polyfill of map()
Array.prototype.myMap = function(fn){
  let arr1 = []
  
  for(let i = 0; i < this.length;i++){
     arr1.push(fn(this[i]));
  }

  return arr1;
}

//Polyfill for filter()

Array.prototype.myFilter = function(fn){
    let arr1 = []

    for(let i = 0; i < this.length; i++){
        if(fn(this[i])){
            arr1.push(this[i]);
        }
    }

    return arr1;
}

//Polyfill for reduce()
Array.prototype.myReduce = function(fn,initialVal){
  let acc = initialVal;

  for(let i = 0; i < this.length; i++){
    acc = acc ? fn(acc,this[i],i,this) : this[i]
  }

  return acc;
}

let arr = [1,2,3,4,5,6]

let val = arr.myReduce((acc,curVal) => {
    return acc + curVal;
} , 0)

console.log(val);

//Polyfill for call() , apply() , bind()
let car1 = {
  color : "Purple",
  company : "laborghini"
}

function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color} - ${this.company} at ${currency}${price}`);
}

Function.prototype.myCall = function(context = {} , ...args){
    if(typeof this !== "function"){
        throw new Error("Not a Function");
    }

    context.fn = this;
    context.fn(...args);
}

Function.prototype.myApply = function(context = {} , args = []){
    if(typeof this !== "function"){
        throw new Error("Not a Function");
    }

    if(!Array.isArray(args)){
        throw new Error("args called is a non-array params")
    }

    context.fn = this;
    context.fn(...args);
}

Function.prototype.myBind = function(context = {} , ...args){
    if(typeof this !== "function"){
        throw new Error("Not a Function");
    }
    
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args,...newArgs);
    }
}



let func = purchaseCar.myBind(car1 , "$")
console.log(func("125000"));

