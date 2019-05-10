// Создание переменных таймера
const base = 60;
let clocktimer;
let dateObj;
let formattedMin;
let formattedSec;
let readout = '';
let min = 1;
let tmin = 1;
let sec = 0;
let tsec = 0;
let ms = 0;

// Функция обнуления таймера
const clearTimer = () => {
  clearTimeout(clocktimer);
  min = 1;
  tmin = 1;
  sec = 0;
  tsec = 0;
  ms = 0;
  readout = '00:00.000'; 
  document.timerForm.timer.value = readout; 
};

// Функция старта таймера
const startTimer = () => {
  const cdateObj = new Date();
  const t = (cdateObj.getTime() - dateObj.getTime()) - (sec * 1000);
  if (t > 999) {
    sec += 1;
  }
  if (sec >= (min * base)) {
    tsec = 0;
    min += 1;
  } else {
      tsec = parseInt((ms / 100) + sec, 10);
      if (tsec >= base) {
        tsec -= (min - 1) * base;
      }
  }

  ms = Math.round(t);
  if (ms > 999) {
    ms = 0;
  }
  if (ms === 0) {
    ms = '000';
  }
  if (ms > 0 && ms <= 99) {
    if (ms <= 9) {
      ms = `00${ms}`;
    } else {
        ms = `0${ms}`;
    }
  }
  if (tsec > 0) {
    formattedSec = tsec;
    if (tsec < 10) {
      formattedSec = `0${tsec}`;
    }
  } else {
      formattedSec = '00';
  }

  formattedMin = tmin - 1;
  if (formattedMin > 0) {
    if (formattesMin < 10) {
      formattedMin = `0${dmin}`;
    }
  } else {
      formattedMin = '00';
  }
  readout = `${formattedMin}:${formattedSec}.${ms}`;
  document.timerForm.timer.value = readout; 
  clocktimer = setTimeout("startTimer()", 1); 
};
