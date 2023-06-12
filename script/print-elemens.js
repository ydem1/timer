const formTimer = value => value.toString().padStart(2, '0');

const scoreTimer = () => `${hours}:${formTimer(min)}:${formTimer(sec)}`; 

setTime();
function setTime(){
  const now = new Date();
  const hoursNow = now.getHours();
  const minutesNow = now.getMinutes();

  timeElem.innerText = `${formTimer(hoursNow)}:${formTimer(minutesNow)}`;
  setInterval(()=> setTime(),60000);
}

function alarmTimer(){
  const [hoursAlarm, minutesAlarm] = getTimeAlarm();
  const alarmTimer = ` 
    <img src="img/alarm-status-icon.png" alt="">
    <p>${hoursAlarm}:${formTimer(minutesAlarm)}</p>
  `;
  return alarmTimer;
}

function updateAlarm(value, reSetAlarm = true){
  alarmTimerElem.style.filter = value;
  if(reSetAlarm)
    alarmTimerElem.innerHTML = alarmTimer();
}

function updateTimerDisplay(displayInput, displayCountdown){
  inputTimerElem.style.display = displayInput;
  containerCountdown.style.display = displayCountdown;
  if(!(scoreTimerElem.innerText===''))
    scoreTimerElem.innerText='';
  if(!(alarmTimerElem.innerText===''))
    alarmTimerElem.innerText='';
}

function updateButton(lable, className, colorBtnCancel = 'white;'){
  buttonPlayElem.innerText = lable;
  buttonPlayElem.className = className;
  containerPlayElem.className = `${className}-container`;

  buttonCancelElem.style = `color: ${colorBtnCancel}`;
}