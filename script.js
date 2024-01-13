window.onload = function () {
    let mins = 0;
    let sec = 0;
    let ms = '00';
    let appendmin = document.querySelector('#mins');
    let appendsec = document.querySelector('#sec');
    let appendms = document.querySelector('#ms');

    let startBtn = document.querySelector('#start-btn');
    let pauseBtn = document.querySelector('#pause-btn');
    let resetBtn = document.querySelector('#reset-btn');
    let Intervel;

    const startTimer = () => {
        ms++
        if (ms <= 9) {
            appendms.innerHTML = "0" + ms
        }
        if (ms > 9) {
            appendms.innerHTML = ms
        }
        if (ms > 99) {
            sec++;
            appendsec.innerHTML = '0' + sec;
            ms = 0;
            appendms.innerHTML = '0' + 0;
        }
        if (sec > 9) {
            appendsec.innerHTML = sec
        }
        if (sec > 59) {
            mins++;
            appendmin.innerHTML = '0' + mins;
            sec = 0;
            appendsec.innerHTML = '0' + 0;
        }
    }
    startBtn.onclick = () => {
        clearInterval(Intervel)
        Intervel = setInterval(startTimer, 10)
    }
    pauseBtn.onclick = () => {
        clearInterval(Intervel)
    }
    resetBtn.onclick = () => {
        clearInterval(Intervel)
        ms = '00'
        sec = '00'
        mins = '00'
        appendms.innerHTML = ms
        appendsec.innerHTML = sec
        appendmin.innerHTML = mins
    }
}