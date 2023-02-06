var numClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  numClicks++;
  $clickCount.textContent = 'Clicks: ' + numClicks;
  switch (true) {
    case (numClicks < 4):
      $hotButton.className = 'hot-button cold';
      break;
    case (numClicks < 7):
      $hotButton.className = 'hot-button cool';
      break;
    case (numClicks < 10):
      $hotButton.className = 'hot-button tepid';
      break;
    case (numClicks < 13):
      $hotButton.className = 'hot-button warm';
      break;
    case (numClicks < 16):
      $hotButton.className = 'hot-button hot';
      break;
    default:
      $hotButton.className = 'hot-button nuclear';
      break;
  }
});
