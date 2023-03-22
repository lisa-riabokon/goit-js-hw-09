// npm i notiflix iмпорт бібліотеки для повідомлень
import Notiflix from 'notiflix';
// npm i flatpickr --savе - підключення бібліотеки та імрорт js та стилів для неї
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  inputDate: document.querySelector('#datetime-picker'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

// робимо кнопку неактивною
refs.btnStart.disabled = true;
// змінна для збереження часу зворотнього відліку
let countdown;
// змінна для затримки таймера
const TIMER_DELAY = 1000;

// console.log(refs.secondsEl);

// підключаємо календар
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // перевіряємо , що дату обрано не в минулому
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        clickToClose: true,
      });
    } else {
      // вираховуємо час для нашого таймера
      countdown = selectedDates[0] - new Date();
      refs.btnStart.disabled = false;
    }
  },
};

flatpickr(refs.inputDate, options);
// console.log(flatpickr);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// додає 0, якщо в числі менше двох символів
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  refs.btnStart.disabled = true;

  timerIdentification = setInterval(() => {
    if (countdown >= 999) {
      countdown -= 1000;
      let timeObject = convertMs(countdown);
      padStart(timeObject);
    } else {
      Notiflix.Notify.success('Countdown finished', {
        clickToClose: true,
      });
      clearInterval(timerIdentification);
    }
  }, TIMER_DELAY);
}

function padStart(evt) {
  refs.daysEl.textContent = evt.days;
  refs.hoursEl.textContent = evt.hours;
  refs.minutesEl.textContent = evt.minutes;
  refs.secondsEl.textContent = evt.seconds;
}
