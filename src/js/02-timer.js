import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  mins: document.querySelector('[data-minutes]'),
  secs: document.querySelector('[data-seconds]'),

  timer: document.querySelector('.timer'),
};

refs.btn.setAttribute('disabled', null);

refs.btn.style.display = 'flex';
refs.btn.style.margin = '20px auto';
refs.btn.style.padding = '10px 20px';
refs.btn.style.fontSize = 'xx-large';

refs.input.style.display = 'flex';
refs.input.style.margin = '0 auto';
refs.input.style.fontSize = 'xxx-large';
refs.input.style.textAlign = 'center';

let timerDeadline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timerDeadline = selectedDates[0].getTime();

    if (timerDeadline < Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      refs.btn.removeAttribute('disabled');
      refs.btn.addEventListener('click', onStartBtnClick);
    }
  },
};

function onStartBtnClick() {
  intervalId = null;

  intervalId = setInterval(() => {
    const pickedTime = Date.now();
    const timeDifference = timerDeadline - pickedTime;

    const timeComponents = convertMs(timeDifference);
    const { days, hours, minutes, seconds } = timeComponents;

    if (seconds <= 0) {
      clearInterval(intervalId);
    }

    refs.days.textContent = addLeadingZero(`${days}`);
    refs.hours.textContent = addLeadingZero(`${hours}`);
    refs.mins.textContent = addLeadingZero(`${minutes}`);
    refs.secs.textContent = addLeadingZero(`${seconds}`);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(refs.input, options);

refs.timer.style.display = 'flex';
refs.timer.style.justifyContent = 'space-evenly';
refs.timer.style.fontSize = 'xxx-large';
refs.timer.style.border = 'black 2px solid';
refs.timer.style.marginTop = '20px';

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
