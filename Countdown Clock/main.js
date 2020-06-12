let countDown;
const time_display = document.querySelector('.display__time-left');
const end_display = document.querySelector('.display__end-time');
const tabButton = document.querySelectorAll('.timer__button');

function getTime() {
    const time = this.dataset.time;
    timer(time);
}

function timer(seconds) {
    clearInterval(countDown)
    const now = Date.now();
    const then = now + (seconds * 1000);
    displayEndTime(then)
    displaytime(seconds)
    countDown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft <= 0) {
            clearInterval(countDown);
        }
        displaytime(secondLeft);
    }, 1000)
}

function displaytime(seconds) {
    const hour = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const min = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const display = `${hour}:${min<10?'0'+min:min}:${seconds<10?'0'+seconds:seconds}`
    time_display.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const min = end.getMinutes();
    const endDisplay = `Be back at ${hour>12?hour-12:hour}:${min<10?'0'+min:min}`
    end_display.textContent = endDisplay;
}
tabButton.forEac
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});