const containerPlayElem = document.querySelector('.button-start-container');
const buttonPlayElem = document.querySelector('.button-start');

const containerCancelElem = document.querySelector('.button-cancel-container')
const buttonCancelElem = document.querySelector('.button-cancel')

let isTimerOn = false;
let isTimerPause = false;
const isTimerInput = () => !((hoursElem.value === '' || hoursElem.value === '0') && (minElem.value === '' || minElem.value === '0') && (secElem.value === '' || secElem.value=== '0'));

buttonPlayElem.addEventListener('click', () => {
  if(!isTimerOn && isTimerInput()){
    startTimer();
  }
  else if(isTimerOn && !isTimerPause) {
    pauseTimer();
  }
  else if(isTimerOn && isTimerPause){
    resumeTimer();
  }   
});

buttonCancelElem.addEventListener('click', () => {
  if(isTimerOn){
    endTimer();
  }
});
