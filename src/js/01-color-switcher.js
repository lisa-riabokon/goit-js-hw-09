function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// доступаємось до елементів на сторінці
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
// змінна для таймера
let timerId = null;
// деактивуємо кнопку стоп на початку
stopBtn.disabled = true;

// слухачі подій на кнопки старт і стоп
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

// функція для кнопки старт при кліку змінюю активність кнопок і задаю зміну кольору body раз на 1с використовуючи функцію getRandomHexColor()
function onStartBtnClick() {
  stopBtn.disabled = false;
  startBtn.disabled = true;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// функція для кнопки стоп при кліку, змінюю активність кнопок і очищую таймер
function onStopBtnClick() {
  stopBtn.disabled = true;
  startBtn.disabled = false;

  clearInterval(timerId);
}
