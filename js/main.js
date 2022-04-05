// Goals:
// - time difference between laps


let interval;
let lapNow;
let startTime;
let startBtn = document.querySelector('.start');
let lapBtn = document.querySelector('.lap');
let stopBtn = document.querySelector('.stop');
let msec = document.querySelector('.msec');
let sec = document.querySelector('.sec');
let min = document.querySelector('.min');


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
        msec.innerHTML = "00";
        sec.innerHTML = "00";
        min.innerHTML = "00";
        lapRecord.innerHTML = "";
        startBtn.classList.remove('block');
        stopBtn.classList.add('block');
        startTime = 0;
    
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

// If Lap button pushed - record the lap time:
function lapTime(){
    lapNow = `<div class="lap">${min.innerHTML} : ${sec.innerHTML} : ${msec.innerHTML}</div>`;
    lapRecord.innerHTML += lapNow;
}

function startTimer(){
    let minute = Math.floor((Date.now() - startTime)/60000);
    let second = Math.floor((Date.now() - startTime) / 1000) - (60 * minute);
    let msecond = Math.floor(((Date.now() - startTime) - 1000 * second - 60000 * minute)/10);
    msec.innerHTML = msecond.toString().length < 2 ? "0" + msecond : msecond;
    sec.innerHTML = second.toString().length < 2 ? ("0" + second) : second;
    min.innerHTML = minute.toString().length < 2 ? ("0" + minute) : minute;
}