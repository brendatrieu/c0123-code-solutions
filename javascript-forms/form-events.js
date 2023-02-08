var handleFocus = event => {
  console.log('Focus event was fired.');
  console.log('Event target: ', event.target.name);
};

var handleBlur = event => {
  console.log('Blur event was fired.');
  console.log('Event target: ', event.target.name);
};

var handleInput = event => {
  console.log('Event target name: ', event.target.name);
  console.log('Event target value: ', event.target.value);
};

var $formName = document.querySelector('#user-name');
var $formEmail = document.querySelector('#user-email');
var $formText = document.querySelector('textarea');

$formName.addEventListener('focus', handleFocus);
$formName.addEventListener('blur', handleBlur);
$formName.addEventListener('input', handleInput);

$formEmail.addEventListener('focus', handleFocus);
$formEmail.addEventListener('blur', handleBlur);
$formEmail.addEventListener('input', handleInput);

$formText.addEventListener('focus', handleFocus);
$formText.addEventListener('blur', handleBlur);
$formText.addEventListener('input', handleInput);
