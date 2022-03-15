// Goals:
// - time difference between laps
// - presnejsi mereni casu


let minute = "00";
let second = "00";
let msecond = "00";
let interval;
let lapNow;
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

    } else if(event.target.classList.contains('lap')){
        lapTime()

    // If Reset button pushed - reset the watch to zero and remove lap times:
    }else if(event.target.classList.contains('reset')){
        clearInterval(interval);
        minute = "00";
        second = "00";
        msecond = "00";
        document.querySelector('.msec').innerHTML = msecond;
        document.querySelector('.sec').innerHTML = second;
        document.querySelector('.min').innerHTML = minute;
        lapRecord.innerHTML = "";
        startBtn.classList.remove('block');
    
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
    lapNow = `<div class="lap">${minute} : ${second} : ${msecond}</div>`;
    lapRecord.innerHTML += lapNow;
}

function startTimer(){
    msecond++;
 	if(msecond < 10){
        msecond = "0" + msecond;
 		document.querySelector('.msec').innerHTML = msecond;
 	}else if(msecond >= 10 && msecond < 100){
	    document.querySelector('.msec').innerHTML = msecond;
 	}else if(msecond = 100){
 		second++;
        second = "0" + second;
        document.querySelector('.sec').innerHTML = second;
 		msecond =0;
 		document.querySelector('.msec').innerHTML = "0" + 0; 	
    }
 	
    if (second > 9){
        second = second.slice(-2);
 		document.querySelector('.sec').innerHTML = second;
 	}
    
    if (second > 59){
        minute++;
        minute = "0" + minute;
        document.querySelector('.min').innerHTML = minute;
        second = 0;
        document.querySelector('.sec').innerHTML = "0" + 0;
    }
    if (minute > 9){
        minute = minute.slice(-2);
        document.querySelector('.min').innerHTML = minute;
    }

}