const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
let timerId = null;
let seconds = 0;

function updateDisplay() {
   display.textContent = `${seconds} sec`;
}

function startTimer() {

   if (timerId !== null) return;

   timerId = setInterval(() => {
      seconds++;
      updateDisplay();
   }, 1000);

   pauseBtn.disabled = false;
   stopBtn.disabled = false;
   startBtn.disabled = true;
}

function pauseTimer() {
   clearInterval(timerId);
   timerId = null;
   startBtn.disabled = false;
   stopBtn.disabled = false;
   pauseBtn.disabled = true;
}

function stopTimer() {
   clearInterval(timerId)
   timerId = null;
   seconds = 0;
   updateDisplay();
   startBtn.disabled = false;
   pauseBtn.disabled = false;
   stopBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);