var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', event => {
  var $dataView = event.target.getAttribute('data-view');

  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabList.length; i++) {
    if (event.target === $tabList[i]) {
      event.target.className = 'tab active';
    } else {
      $tabList[i].className = 'tab';
    }
  }

  for (var k = 0; k < $viewList.length; k++) {
    if ($viewList[k].getAttribute('data-view') !== $dataView) {
      $viewList[k].classList.add('hidden');
    } else {
      $viewList[k].classList.remove('hidden');
    }
  }
});
