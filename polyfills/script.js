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
//console.log(func("125000"));

//Polyfills of once() and memoize()

function once(fn,context){
    let ran;
    return function(){
      if(fn){
        const bindFn = fn.bind(context || this)
        ran = bindFn(...arguments);
        fn = null;
      }
      return ran;
    }
}

let hello = once((a,b) => console.log("hello",a,b))

hello(1,2);
hello(1,2);
hello(1,2);


function myMemoize(fn,context){
  let res ={}

  return function(...args){
    let argsString = JSON.stringify(args);
    if(!res[argsString]){
        res[argsString] = fn.call(context || this , ...args);
    }
    return res[argsString];
  }
}

const clumsySquare = function(a,b){
   for(let i = 0; i < 100000000 ;i++){}
    return a + b;
}


const memoizeClum = myMemoize(clumsySquare);
console.time("first call");
console.log(memoizeClum(9567 , 9234));
console.timeEnd("first call");

console.time("Second call");
console.log(memoizeClum(9567 , 9234));
console.timeEnd("Second call");


//Polyfills of debounce and throttling
function myDebounce(fn,delay){
    let timerId;
    return function(...args){
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        },delay)
    }
}


