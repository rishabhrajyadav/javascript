//Infinite Currying
function sum(n1){
    return function(n2){
      if(n2 === undefined){
        return n1
      }else{
        return sum(n1 + n2)
      }
    }
  }
  
  //console.log(sum(1)(2)(3)())

  //function : converts normal function into curried function
  function curry(fn){
    function curried(...args){
       if(args.length >= fn.length){
         return fn(...args)
       }else{
        return function(...nextArgs){
            return curried(...args,...nextArgs)
        }
       }
    }
    return curried;
  }

  function sum(a,b,c){
    return a + b + c;
  }

  //console.log(curry(sum)(1)(1000)(999))

//IIFE
-function test(){
    var personName = 'asdf'
    console.log(personName);
}();
+function test(){
    var personName = 'asdf'
    console.log(personName);
}();
(function test(){
    var personName = 'asdf'
    console.log(personName);
})();

