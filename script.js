let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
        // Remove this line to prevent changing text when timer starts
    }
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        displayTime();
    } else {
        clearInterval(timer);
        isRunning = false;
        document.querySelector('h1').textContent = 'Pomodoro'; // Reset text to 'Pomodoro' when timer ends
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 1500;
    displayTime();
    isRunning = false;
    document.querySelector('h1').textContent = 'ポモドーロ'; // Reset text to 'Pomodoro' when timer is reset
}

function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

displayTime();
