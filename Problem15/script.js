let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

// Update display
function updateDisplay() {
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

// Start
function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

// Stop
function stop() {
  clearInterval(timer);
  timer = null;
}

// Reset
function reset() {
  stop();
  seconds = minutes = hours = 0;
  updateDisplay();
}
