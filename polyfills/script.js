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
