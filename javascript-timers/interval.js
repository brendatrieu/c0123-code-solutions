var $display = document.querySelector('.countdown-display');

var countdown = () => {
  if ($display.textContent > 1) {
    $display.textContent--;
  } else {
    $display.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countID);
  }
};

var countID = setInterval(countdown, 1000);
