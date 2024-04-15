const btn = document.getElementById("incr")
const pressed = document.getElementById("pressed")
const triggered = document.getElementById("triggered")

let triggeredCount = 0;
let pressedCount = 0;

const start = new Date().getTime();
console.log(start);

const myThrottle = (fn,delay) => {
  let last = 0;

  return (...args)=>{
    let now = new Date().getTime();
    if(now - last < delay) return;
    last = now;
    return fn(...args)
  }
}

let throttled = myThrottle(() => {
   triggeredCount += 1;
   triggered.textContent = triggeredCount;
},1000)

btn.addEventListener("click",() => {
 pressedCount++;   
 pressed.textContent = pressedCount;
 /* const now = new Date().getTime();
 const seconds = (now - start) /1000;
 console.log(seconds.toFixed()); */

 throttled();
})