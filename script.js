document.addEventListener("DOMContentLoaded", () => {
    let timer;
    let startTime;
    let elapsedTime = 0;
    let isRunning = false;

    const display = document.querySelector('.display');
    const startButton = document.querySelector('.start');
    const pauseButton = document.querySelector('.pause');
    const resetButton = document.querySelector('.reset');

    startButton.addEventListener('click', () => {
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsedTime;
            timer = setInterval(updateTime, 10);
        }
    });

    pauseButton.addEventListener('click', () => {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
        }
    });

    resetButton.addEventListener('click', () => {
        clearInterval(timer);
        isRunning = false;
        elapsedTime = 0;
        display.textContent = '00 : 00 : 00 : 00';
    });

    function updateTime() {
        elapsedTime = Date.now() - startTime;
        const milliseconds = parseInt((elapsedTime % 1000) / 10);
        const seconds = parseInt((elapsedTime / 1000) % 60);
        const minutes = parseInt((elapsedTime / (1000 * 60)) % 60);
        const hours = parseInt((elapsedTime / (1000 * 60 * 60)) % 24);

        display.textContent = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)} : ${pad(milliseconds)}`;
    }

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }
});
