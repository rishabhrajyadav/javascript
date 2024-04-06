/* let score = "true";

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1
//undefined => NaN
//null(object) => 0

let isLoggedIn = undefined;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"", null, undefined => false (Falsy);

let someNumber = undefined;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof(stringNumber)); */

// *********************** Operations ************************

let value = 3;
let negValue = -value;

console.log(negValue)
console.log("2" +  "2");

let str1 = "hello"
let str2 = "Rishabh"

let str3 = str1 + str2
console.log(str3);

//Operator precedence
console.log("1" + 2); 
console.log(1 + "2");
console.log("1" + 2 + 2 );
console.log(2 + 2 + "1");
console.log("1" + 2 + 2 + "1");

console.log(+true);
console.log(+"");

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2

//prefixx ++x and postfix x++
let gameChanger = 100
const a = gameChanger++;
const b = ++gameChanger;
console.log(a);
console.log(b);
console.log(gameChanger)