const timeElem = document.querySelector('.time');

const hoursElem = document.querySelector('.hours-input');
const minElem = document.querySelector('.min-input');
const secElem = document.querySelector('.sec-input');


function getInputTimer(){
  let hoursInput = Number(hoursElem.value) || 0;
  let minInput = Number(minElem.value) || 0;
  let secInput = Number(secElem.value) || 0;

  return [hoursInput, minInput, secInput]
}

function getTimeAlarm(){
  const TimeNow = new Date();
  const addedTime = new Date(TimeNow.getTime() + (hours * 60 * 60 * 1000) + (min * 60 * 1000) + (sec * 1000));

  const hoursAlarm = addedTime.getHours();
  const minutesAlarm = addedTime.getMinutes();

  return [hoursAlarm, minutesAlarm]
}

hoursElem.addEventListener('input', () => {
  if (hoursElem.value < 0) {
    hoursElem.value = 0;
  } else if (hoursElem.value > 23) {
    hoursElem.value = 23;
  }
});

minElem.addEventListener('input', () => {
  if (minElem.value < 0) {
    minElem.value = 0;
  } else if (minElem.value > 59) {
    minElem.value = 59;
  }
});

secElem.addEventListener('input', () => {
  if (secElem.value < 0) {
    secElem.value = 0;
  } else if (secElem.value > 59) {
    secElem.value = 59;
  }
});

