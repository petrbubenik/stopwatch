// Goals:
// - dodelat mezicas - casy se ukazuji bez pocatecnich nul
// - dat stop a reset do stejneho buttonu
// - presnejsi mereni casu
// - double click on start does not allow to stop/reset
// - time difference between laps


let minute = 0;
let second = 0;
let msecond = 0;
let interval;
let lapNow;

// 1. listen to buttons
const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(element => element.addEventListener('click', pushButton));


function pushButton(event){
    
    // If Start button - start the watch
    if (event.target.classList.contains('start')){
        interval = setInterval(startTimer);

    // If Lap button - record the time
    } else if(event.target.classList.contains('lap')){
        lapNow = `<div class="lap">${minute} : ${second} : ${msecond}</div>`;
        lapRecord.innerHTML += lapNow; // document.querySelector('#lapRecord').innerHTML += lapNow;

    
    // If Stop button - stop the watch and keep the time
    } else if(event.target.classList.contains('stop')){
        clearInterval(interval);
    
    
    // If Reset button - reset the watch to zero
    } else if(event.target.classList.contains('reset')){
        clearInterval(interval);
        minute = "00";
        second = "00";
        msecond = "00";
        document.querySelector('.msec').innerHTML = msecond;
        document.querySelector('.sec').innerHTML = second;
        document.querySelector('.min').innerHTML = minute;
        lapRecord.innerHTML = "";
    }
}

function startTimer(){
    msecond++;
 	if(msecond < 9){
 		document.querySelector('.msec').innerHTML = "0" + msecond;
 	}
 	if(msecond > 9){
	document.querySelector('.msec').innerHTML = msecond;
 	}
 	if(msecond > 99){
 		second++;
 		document.querySelector('.sec').innerHTML = "0" +second;
 		msecond =0;
 		document.querySelector('.msec').innerHTML = "0" + 0; 	
 	}
 	if (second > 9){
 		document.querySelector('.sec').innerHTML = second;
 	}
    if (second > 59){
        minute++;
        document.querySelector('.min').innerHTML = "0" + minute;
        second = 0;
        document.querySelector('.sec').innerHTML = "0" + 0;
    }
    if (minute > 9){
        document.querySelector('.min').innerHTML = minute;
    }

}