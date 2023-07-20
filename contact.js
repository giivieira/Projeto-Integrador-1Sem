const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Niepoprawny adres e-mail.';
  } else {
    emailError.textContent = '';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}