const add = (a) => (b) => a + b;
const sub = (a) => (b) => a - b;
const mul = (a) => (b) => a * b;
const divide = (a) => (b) => a / b;

const buttons = document.querySelectorAll('button')
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click",(e) => {
    const num1 = parseInt(firstInput.value.trim())
    const num2 = parseInt(secondInput.value.trim())
    let result ;

    if(isNaN(num1) || isNaN(num2)){
        alert("Please enter valid numbers in both fields.")
        return; // Exit the function if any input is not a valid number
    }

    if(num1 === "" || num2 === ""){
        alert("Please enter valid numbers in both fields.")
        return; // Exit the function if any input is not a valid number
    }

    if(e.target.id === "add"){
      result = add(num1)(num2);
    } 
    if(e.target.id === "subtract"){
      result = sub(num1)(num2);
    } 
    if(e.target.id === "multiply"){
      result = mul(num1)(num2);
    } 
    if(e.target.id === "divide"){
      result = divide(num1)(num2);
    } 

    displayResult(result);
  })
})
 //get input elements
const firstInput = document.getElementById("fNumber");
const secondInput = document.getElementById("sNumber");
/* const addNums = document.getElementById("add");
const subtNums = document.getElementById("subtract");
const mulNums = document.getElementById("multiply");
const divideNums = document.getElementById("divide"); */
const  result = document.getElementById("result")

//jab click karega
/* const num1 = parseInt(firstInput.value)
const num2 = parseInt(secondInput.value) */

/* addNums.addEventListener('click' , (e) => { 
   const num1 = parseInt(firstInput.value)
   const num2 = parseInt(secondInput.value) 
   const result = add(num1)(num2);
   displayResult(result);
})

subtNums.addEventListener("click" , () => {
    const num1 = parseInt(firstInput.value)
    const num2 = parseInt(secondInput.value)
    const result = sub(num1)(num2);
    console.log(result)
    displayResult(result);
})

mulNums.addEventListener("click" , () => {
    const num1 = parseInt(firstInput.value)
    const num2 = parseInt(secondInput.value)
    const result = mul(num1)(num2);
    console.log(result)
    displayResult(result);
})

divideNums.addEventListener("click" , () => {
    const num1 = parseInt(firstInput.value)
    const num2 = parseInt(secondInput.value)
    const result = divide(num1)(num2);
    console.log(result)
    displayResult(result);
})  */

function displayResult(res){
    if(res < 0){
        result.innerHTML = "Negative Combination Not Allowed";
    } else {
        result.innerHTML = res; 
    }
   
}
