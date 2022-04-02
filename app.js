
let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let time = document.getElementById("time");
let rotateForHour,rotateForMin,rotateForSec;

setInterval(function(){
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    rotateForHour = seconds/120+hours*30+minutes/2;
    rotateForMin = 6*minutes + seconds/10;
    rotateForSec = seconds*6;
    hour.style.transform = `rotate(${rotateForHour}deg)`;
    min.style.transform = `rotate(${rotateForMin}deg)`;
    sec.style.transform = `rotate(${rotateForSec}deg)`;
    if(hours<10){
        hours = "0"+hours
    }else if(hours === 12){
        hours = "00";
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }else if(minutes == 60){
        minutes = "00";
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }else if(seconds === 60){
        seconds = "00";
    }
    time.innerText = `${hours} : ${minutes} : ${seconds}`;
},1000);
