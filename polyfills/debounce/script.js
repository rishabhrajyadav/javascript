const btn = document.getElementById("incr")
const pressed = document.getElementById("pressed")
const triggered = document.getElementById("triggered")

let triggeredCount = 0;
let pressedCount = 0;

const start = new Date().getTime();

const myDebounce = (fn,delay) => {
  let timerId
  return (...args)=>{
    if(timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
       fn(...args);
    },delay)
  }
}

let debounced = myDebounce(() => {
   triggeredCount += 1;
   triggered.textContent = triggeredCount;
},1000)

btn.addEventListener("click",() => {
 pressedCount++;   
 pressed.textContent = pressedCount;
 const now = new Date().getTime();
 const seconds = (now - start) /1000;

 debounced();
})