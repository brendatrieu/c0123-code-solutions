var $modalStatus = document.querySelector('.overlay');
var $openModal = document.querySelector('.open-modal');
var $closeModal = document.querySelector('.close-modal');

function modalToggle() {
  if ($modalStatus.className === 'overlay inactive') {
    $modalStatus.className = 'overlay';
  } else {
    $modalStatus.className = 'overlay inactive';
  }
}

$openModal.addEventListener('click', modalToggle);
$closeModal.addEventListener('click', modalToggle);
