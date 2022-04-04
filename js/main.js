// Goals:
// - clear the code after the interval logic change (setInterval() -> Date.now())
// - 100 mseconds sometimes - change in startTimer()
// - time difference between laps
// - stop/reset button same width

let minute = "00";
let second = "00";
let msecond = "00";
let interval;
let startTime;
let startBtn = document.querySelector('.start');
let lapBtn = document.querySelector('.lap');
let stopBtn = document.querySelector('.stop');


// 1. listen to buttons
const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(element => element.addEventListener('click', pushButton));


function pushButton(event){
    
    // If Start button pushed - start the watch:
    if (event.target.classList.contains('start')){
        interval = setInterval(startTimer);
        startBtn.classList.add('block');
        lapBtn.classList.remove('block');
        stopBtn.classList.remove('block');
        stopBtn.classList.remove('reset');
        stopBtn.innerText = 'Stop';
        startTime = Date.now();

    } else if(event.target.classList.contains('lap')){
        lapTime()

    // If Reset button pushed - reset the watch to zero and remove lap times:
    }else if(event.target.classList.contains('reset')){
        clearInterval(interval);
        document.querySelector('.msec').innerHTML = "00";
        document.querySelector('.sec').innerHTML = "00";
        document.querySelector('.min').innerHTML = "00";
        lapRecord.innerHTML = "";
        startBtn.classList.remove('block');
        startTime = 0;
        stopTime = 0;
        lapT = 0;
    
    // If Stop button pushed - stop the watch and log the time:
    }else if(event.target.classList.contains('stop')){
    clearInterval(interval);
    lapTime();
    stopBtn.classList.add('reset');
    startBtn.classList.remove('block');
    lapBtn.classList.add('block');
    stopBtn.innerText = 'Reset';
    }
}

// If Lap button pushed - record the time
function lapTime(){
    let lapNow = `<div class="lap">${document.querySelector('.min').innerHTML} : ${document.querySelector('.sec').innerHTML} : ${document.querySelector('.msec').innerHTML}</div>`;
    lapRecord.innerHTML += lapNow;
}

function startTimer(){
    minute = Math.floor((Date.now() - startTime)/60000);
    second = Math.floor((Date.now() - startTime) / 1000) - (60 * minute);
    msecond = Math.round(((Date.now() - startTime) - 1000 * second - 60000 * minute)/10);
    document.querySelector('.msec').innerHTML = msecond.toString().length < 2 ? "0" + msecond : msecond;
    document.querySelector('.sec').innerHTML = second.toString().length < 2 ? ("0" + second) : second;
    document.querySelector('.min').innerHTML = minute.toString().length < 2 ? ("0" + minute) : minute;
}