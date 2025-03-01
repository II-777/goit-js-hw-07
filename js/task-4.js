const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (login === '' || password === '') {
    window.alert('Please fill in all the fields!');
    return
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

