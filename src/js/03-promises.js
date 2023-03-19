//установка бібліотеки $ npm i notiflix
import Notiflix from 'notiflix';
import Notiflix from 'notiflix';

const form = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  buttonEl: document.querySelector('button[type="submit"]'),
};

form.buttonEl.addEventListener('click', onCreatePromise);

function onCreatePromise(evt) {
  // скасовуємо перезавантаження за замовчуванням
  evt.preventDefault();

  //збір даних з input та конветрація в числа
  let delayValue = Number(form.delayEl.value);
  let stepValue = Number(form.stepEl.value);
  let amountValue = Number(form.amountEl.value);

  // console.log(delayValue);
  // console.log(stepValue);
  // console.log(amountValue);

  for (let i = 1; i <= amountValue; i += 1) {}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
