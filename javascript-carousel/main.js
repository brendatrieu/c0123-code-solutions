var $img = document.querySelector('img');
var $carousel = document.querySelector('.carousel');
var $leftArr = document.querySelector('.fa-chevron-left');
var $rightArr = document.querySelector('.fa-chevron-right');
var $progDots = document.querySelectorAll('.fa-circle');
var dotsArr = [...$progDots];

var imgObj = {
  src: ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'],
  alt: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'JigglyPuff']
};

var currIndex = 0;

// Change attributes of arrow icons
var changeArr = () => {
  if (currIndex === 0) {
    $leftArr.setAttribute('id', imgObj.src.length - 1);
    $rightArr.setAttribute('id', currIndex + 1);
  } else if (currIndex === imgObj.src.length - 1) {
    $leftArr.setAttribute('id', currIndex - 1);
    $rightArr.setAttribute('id', 0);
  } else {
    $leftArr.setAttribute('id', currIndex - 1);
    $rightArr.setAttribute('id', currIndex + 1);
  }
};

// Change dot appearance
var dotSwitch = () => {
  for (var dot = 0; dot < $progDots.length; dot++) {
    if (dot === currIndex) {
      $progDots[dot].className = 'fa-solid fa-circle';
    } else {
      $progDots[dot].className = 'fa-regular fa-circle';
    }
  }
};

var intervalPic = () => {
  $img.setAttribute('src', imgObj.src[currIndex]);
  $img.setAttribute('alt', imgObj.alt[currIndex]);

  changeArr();
  dotSwitch();

  if (currIndex === imgObj.src.length - 1) {
    currIndex = 0;
  } else {
    currIndex++;
  }
};

var switchPic = event => {
  if (event.target.tagName !== 'I') {
    return;
  }

  var targetId = event.target.getAttribute('id');

  clearInterval(intervalID);

  if (event.target.matches('.fa-circle')) {
    currIndex = dotsArr.indexOf(event.target);
    $img.setAttribute('src', imgObj.src[currIndex]);
    $img.setAttribute('alt', imgObj.alt[currIndex]);
    changeArr();
    dotSwitch();
  } else {
    $img.setAttribute('src', imgObj.src[targetId]);
    $img.setAttribute('alt', imgObj.alt[targetId]);
    currIndex = JSON.parse(targetId);
    changeArr();
    dotSwitch();
  }

  intervalID = setInterval(intervalPic, 3000);
};

var intervalID = setInterval(intervalPic, 3000);

$carousel.addEventListener('click', switchPic);
