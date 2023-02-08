var $letters = document.querySelectorAll('span');
var $playAgain = document.querySelector('.play-query');
var $resetButton = document.querySelector('button');
var $accuracy = document.querySelector('.complete-msg');
var numTries = 0;
var keyPressed = '';
var currentIndex = 0;

function logInput(input) {
  keyPressed = input.key;
  numTries++;
  if (currentIndex < $letters.length) {
    if (keyPressed === $letters[currentIndex].textContent) {
      $letters[currentIndex].className = 'correct';
      if ($letters[currentIndex + 1]) {
        $letters[currentIndex + 1].className = 'current';
      }
      currentIndex++;
    } else {
      $letters[currentIndex].className = 'incorrect';
    }
  }

  if (currentIndex === $letters.length) {
    $playAgain.className = 'play-query';
    for (var i = 0; i < $letters.length; i++) {
      $letters[i].className = '';
    }
    if (!$accuracy.textContent) {
      $accuracy.textContent = 'Typing Accuracy: ' + ((30 / numTries) * 100).toFixed(1) + '%';
    }
  }
}

function reset() {
  $playAgain.className = 'play-query in-progress';
  currentIndex = 0;
  numTries = 0;
  $accuracy.textContent = '';
}

document.addEventListener('keydown', logInput);
$resetButton.addEventListener('click', reset);
