//установка бібліотеки $ npm i notiflix
import Notiflix from 'notiflix';

const form = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  buttonEl: document.querySelector('button[type="submit"]'),
};

// console.log(form.buttonEl);

form.buttonEl.addEventListener('click', onCreatePromise);

function onCreatePromise(evt) {
  // скасовуємо перезавантаження за замовчуванням
  evt.preventDefault();

  //збір даних з input та конветрація в числа
  let delayValue = Number(form.delayEl.value);
  let stepValue = Number(form.stepEl.value);
  let amountValue = Number(form.amountEl.value);

  console.log(delayValue);
  console.log(stepValue);
  console.log(amountValue);

  for (let i = 1; i <= amountValue; i += 1) {
    let promiseDelay = delayValue + stepValue * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          { useIcon: false }
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.success(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            useIcon: false,
          }
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
