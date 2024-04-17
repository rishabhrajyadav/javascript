const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")
const resetBtn = document.querySelector("#resetBtn")
const display = document.getElementById("display")

let elepasedTime = 0;
let startTime;
let intervalId;

function displayTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
  
    const formattedTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    display.textContent = formattedTime;
  }
  
  function padTime(time) {
    return time < 10 ? `0${time}` : time;
  }


startBtn.addEventListener("click" , (e) => {
    if(!intervalId){
        startTime = Date.now() - elepasedTime;
        intervalId = setInterval(()=>{
            elepasedTime = Date.now() - startTime;
            displayTime(elepasedTime);
          },10)
    }
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = 0;
}) 


resetBtn.addEventListener("click", (e) => {
    clearInterval(intervalId);
    intervalId = 0;
    elepasedTime = 0;
    displayTime(elepasedTime);
} )

