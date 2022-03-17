const secondsText = document.getElementById('seconds')
const millisecondsText = document.getElementById('milliseconds')
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const resetButton = document.getElementById('resetButton')
let Interval;
let seconds = 0;
let milliseconds = 0;

startButton.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(tickTimer, 10);
}

stopButton.onclick = () => {
    clearInterval(Interval);
}

resetButton.onclick = () => {
    clearInterval(Interval);
    milliseconds = seconds = 0;
    millisecondsText.innerHTML = toDoubleDigit(milliseconds);
    secondsText.innerHTML = toDoubleDigit(seconds);
}

const tickTimer = () => {
    milliseconds++;
    if (milliseconds === 100) {
        seconds++;
        milliseconds = 0;
    }
    millisecondsText.innerHTML = toDoubleDigit(milliseconds);
    secondsText.innerHTML = toDoubleDigit(seconds);
}

const toDoubleDigit = (num) => {
    if (num < 10) return '0'+num.toString();
    else return num.toString();
}