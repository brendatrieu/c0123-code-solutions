var switchStatus = document.querySelector('button');
var roomStatus = document.querySelector('div');

function switchLight() {
  if (switchStatus.className === 'on-switch') {
    switchStatus.className = 'off-switch';
    roomStatus.className = 'dark';
  } else {
    switchStatus.className = 'on-switch';
    roomStatus.className = 'light';
  }
}

switchStatus.addEventListener('click', switchLight);
