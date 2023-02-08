var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', event => {
  event.preventDefault();

  var $formData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };

  console.log('Form data: ', $formData);

  $contactForm.reset();
});
