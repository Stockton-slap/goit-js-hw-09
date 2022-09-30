const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.body.classList.add('body');

let intervalId = null;

function onBtnStartClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(changeBodyColor, 1000);
  refs.btnStart.setAttribute('disabled', null);
  refs.btnStop.removeAttribute('disabled');
}

function changeBodyColor() {
  if (intervalId !== null) {
    refs.body.style.backgroundColor = getRandomHexColor();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStopClick() {
  clearInterval(intervalId);
  refs.btnStop.setAttribute('disabled', null);
  refs.btnStart.removeAttribute('disabled');
}
