const titleTimerElem = document.querySelector('.container-timer');
const inputTimerElem = document.querySelector('.input-timer');
const scoreTimerElem = document.querySelector('.score-timer');
const alarmTimerElem = document.querySelector('.alarm-timer');

const containerCountdown = document.querySelector('.container-countdown');
const progressCircle = document.querySelector('.progress');

const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

let idTimer = 0;
let hours, min, sec = 0;

let elapsed = 0;
let duration = 0;

function startTimer(){
  [hours, min, sec] = getInputTimer();
  duration = hours * 60 * 60 + min * 60 + sec;
  updateButton('Pause', 'button-pause');
  updateTimerDisplay('none', 'block');
  updateAlarm('none');
  countDown();
  idTimer = setInterval(()=>{countDown();},1000);
  isTimerOn = true;
}

function endTimer(){
  clearInterval(idTimer);
  updateButton('Start', 'button-start', 'none');
  updateTimerDisplay('flex', 'none');
  isTimerOn = false;
  isTimerPause = false;
  reSetProgress();
}

function pauseTimer(){
  clearInterval(idTimer);
  updateButton('Resume', 'button-start');
  updateAlarm('grayscale(100%) brightness(30%)', false);
  isTimerPause = true;
}

function resumeTimer(){
  idTimer = setInterval(()=>{countDown();},1000);
  updateButton('Pause', 'button-pause');
  updateAlarm('none');
  isTimerPause = false;
}

function countDown(){
  scoreTimerElem.innerText = scoreTimer();
  updateProgress();
  if(min >= 0 && sec >= 0 && hours >= 0){
     if(min <= 0 && sec <= 0 && hours > 0){
       min = 60;
       hours--;
     }
     if(sec <= 0 && min > 0){
       sec = 60;
       min--;
     }
   }
   else{
    endTimer();
   }
  sec--;
}

function updateProgress(){
  const percent = Math.round((elapsed / duration) * 100);
  const progress = circumference - ((percent / 100) * circumference);
  progressCircle.setAttribute("stroke-dasharray", `${progress} ${circumference}`);  
  elapsed++;
}

function reSetProgress(){
  elapsed = 0;
  progressCircle.removeAttribute("stroke-dasharray");
}