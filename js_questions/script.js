//find the longest word 

const findTheLongestWord = (elem) => {
    if(elem.trim().length === 0){
        return false
    }
    
    let strArr = elem.split(" ");
    /* strArr = strArr.sort((a,b) => b.length - a.length) //this return arr in descending order length
    console.log(strArr);
    return strArr[0] */
    return strArr.reduce((acc , currWord) => currWord.length > acc.length ? currWord : acc , "")
}

//console.log(findTheLongestWord("Rishabh Raj Yadav is Coding"))

//Hash Tag Generator

const generateHash = (str) => {
    if(str.trim().length === 0 || str.length > 280){
        return false;
    }

    str = str.trim().split(" ")
    str = str.map((elem) => 
      //elem.replace(elem[0] , elem[0].toUpperCase())
      elem.charAt(0).toUpperCase() + elem.slice(1)
    );
    /* str = `#${str.join("")}` */
    str = "#" + str.join("")
    console.log(str);
}

//console.log(generateHash("rishabh raj yadav is coding "));

//Count Occurences of Character
const countChar = (str , char) => {
    let charr = char.toUpperCase();
    let strr = str.trim().toUpperCase();
    totalCOunt = strr.split("").reduce((acc,curr) => {
      if(charr === curr){
        acc++;
      }
      return acc;
    },0)

    return totalCOunt;
}

//console.log(countChar("RIshabhRajYadav" , "a"));


//Sort an array
const sortAscending = (arr) => {
  return arr.sort((a,b) => a-b)
}

//console.log(sortAscending([5 ,3, 10, 8]));

//isPallindrome
const isPallindrome = (str) => {
  str = str.trim().toLowerCase().replace(/\W/g,"");
  let r_str = str.split("").reverse().join("")
   return str === r_str ? true : false;
} 

//Maximum
const findMax = (arr) => {
  console.log(arr);
  console.log(...arr);
  return Math.max(...arr)
} 

//console.log(findMax([1,90,32,78]))

//factorial

const factorial = (n) => {
  let num = 1;
  if(n == 0){ 
    return 1;
  };

  if(n < 0) throw new Error("Not a Positive number")

  for(let i = n; i > 0 ; i--){
    num *= i;
  }

  return num;
}

//console.log(factorial(5));

//calculateAverage
const calculateAverage = (arr) => {
  let value = arr.reduce((acc,currVal) => {
     return acc + currVal;
  }, 0)

  return Math.floor(value / arr.length);
}

//console.log(calculateAverage([1,90,32,78]));

const arrayAreEqual = (arr1,arr2) => {
  if(arr1.length !== arr2.length) return false;
  
  /* for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]){
      return false;
    }
  } */

  return arr1.every((currVal, index) => currVal === arr2[index])
  
}

//console.log(arrayAreEqual([1,2,3],[1,2,3]));

const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number)  
  return arr.reduce((accum, curElem) => accum + curElem)
}

//console.log(sumOfDigits(1334));

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
}

//console.log(removeDuplicates([1,2,3,2,1,4]));

const countVowels = (str) => {
  /* str = str.trim().toLowerCase();
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == "a" ||str[i] == "e" ||str[i] == "i"||str[i] == "o"||str[i] == "u"){
      count++
    }
  }
  return count++ */
  let vowels = ['a' , 'e' , 'i' ,'o' ,'u'];

  let arr = str.split("");
  let count = 0;
  for(let char of arr){
    if(vowels.includes(char.toLowerCase())){
      count++;
    }
  }
  return count;
}

//console.log(countVowels("Rishabh Raj Yadav"));

const isPowerOfTwo = (num) => {
  let op = false;
  for(let i = 1; i < num; i++){
    if(2**i == num){
      op = true
    }
  }
  return op;
}

//console.log(isPowerOfTwo(2));

const sumOfSquares = (arr) => {
  return arr.reduce((acc,curr) =>  acc += curr*curr, 0)
}

//console.log(sumOfSquares([1,2,3]))

const findMin = (arr) => {
 /* let newArr = arr.sort((a,b) => a-b);
 return newArr[0]; */
 if(arr.length === 0) return "array is empty"
 return Math.min(...arr);
}

//console.log(findMin([]));

const camelCase = (str) => {
  str = str.trim().split(" ");
  let newStr = str[0]
  for(let i = 1; i< str.length; i++){
    newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }
  return newStr
}

//console.log(camelCase("hello world rishaBh"));

const isUpperCase = (char) => {
  /* if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
    return true;
  }
  return false; */
  return char === char.toUpperCase();
}

//console.log(isUpperCase("S"));

const startsWith = (sent , word) => {
  /* sent = sent.trim().split(" ");
  if(sent[0].toLowerCase() === word.toLowerCase()){
    return true
  }
  return false; */
  return sent.toLowerCase().startsWith(word.toLowerCase())
}

//console.log(startsWith("Hello World" , "hello"));

const reverseString = (str) => {
  str = str.trim().split("")
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    newStr += str[str.length - 1 - i];
  }
  return newStr;
}

//console.log(reverseString("Hola Amigo"));

//Median
const findMedian = (arr) => {
  let newArr = arr.sort((a,b) => a-b)
  if(newArr.length % 2 != 0){
    return newArr[Math.floor(newArr.length / 2)];
  }
  let index = newArr.length / 2;
  return (newArr[index - 1] + newArr[index])/2;
}

//console.log(findMedian([3,3,7,5,10,11]));

const counts = (arr) => {
  let obj = {};

  for(let i =0; i < arr.length; i++){
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  return obj;
}

//console.log(counts([1,2,2,2,2,3,3,3,1,4,4,4]));

//Mode
const findMode = (arr) => {
  let obj = {};
  let maxNum = 0;
  let mode;

  for(let element of arr){
    counts[element] = (counts[element] || 0) + 1;
    if(counts[element] > maxNum){
      maxNum = counts[element];
      mode = element;
    }
  }
  return {mode , maxNum};
}

//console.log(findMode([1,2,2,2,3,1,4,2]));

//Recursion : factorial

const factoriall = (num) => {
  if(num == 0) return 1;
  return num * factoriall(num - 1);
}

//console.log(factoriall(0));

const fibonacci = (num) => {
  if(num <= 1){
    return num;
  }else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

//console.log(fibonacci(5));

const repeatString = (str , repeatition) => {
  /* let newStr = "";
  for(let i = 0; i < repeatition; i++){
    newStr += str;
  }
  return newStr; */
  return repeatition > 0 ? str.repeat(repeatition) : str;
}

//console.log(repeatString("abc" ,0));

const truncateString = (str, num) => {
 /*  str = str.trim().split("");
  let newStr = "";
  for(let i = 0; i < num; i++){
    newStr += str[i];
  }
  return newStr + "..."; */
  return num <= 0 ? str : str.slice(0 , num).concat("...");
}

//console.log(truncateString("Rishabh Raj Yadav", 0));

const numberRange = (a,b) => {
  if(a == b) return [a];
  let arr = []
  if(a < b){
    for(let i = a; i <= b; i++){
      arr.push(i);
    }
  }
  return arr;
}
//console.log(numberRange(-3,3));

const numberRangeRecursive = (a,b) => {
  if(a == b) return [a];
  let arr = []
  if(a < b){
    arr.push(a);
    a++;
  }
  return [...arr, ...numberRangeRecursive(a,b)]
}
//console.log(numberRangeRecursive(0,10));

const numberRangeRecursive1 = (a,b,arr = []) => {
  if(a <= b){
    arr.push(a);
    return numberRangeRecursive1(a+1,b,arr)
  }
    return arr;
}

console.log(numberRangeRecursive1(0,4));