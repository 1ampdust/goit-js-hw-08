import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInput, 500));

window.addEventListener('load', populateFormFields);

form.addEventListener('submit', handleSubmit);

function handleInput() {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFormFields() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
