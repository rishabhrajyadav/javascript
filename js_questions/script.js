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
  
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]){
      return false;
    }
  }
  return true;
}

console.log(arrayAreEqual([1,2,3],[1,2,3]));
