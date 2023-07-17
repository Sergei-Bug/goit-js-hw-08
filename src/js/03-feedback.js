var throttle = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector("[name='email']"),
  message: document.querySelector("[name='message']"),
};

const formInfo = {};

refs.form.addEventListener('submit', onClickSubmit);
refs.form.addEventListener('input', throttle(onFillInput, 500));

if (!localStorage.getItem(STORAGE_KEY)) {
  return;
} else {
  const { email, message } = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (email !== '' || message !== '') {
    refs.email.value = email;
    refs.message.value = message;
  } else {
    refs.email.value = ' ';
    refs.email.message = ' ';
  }
}

function onClickSubmit(evt) {
  const { email, message } = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (email === '' || message === '') {
    return;
  }

  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  evt.currentTarget.reset(); //Очищение всех полей

  localStorage.removeItem(STORAGE_KEY);
}

function onFillInput(evt) {
  formInfo.message = refs.message.value;
  formInfo.email = refs.email.value;

  formInfo[evt.target.name] = evt.target.value;

  const info = JSON.stringify(formInfo);

  localStorage.setItem(STORAGE_KEY, info);
}
