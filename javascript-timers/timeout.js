var updateHeader = () => {
  var $header = document.querySelector('.message');
  $header.textContent = 'Hello There';
};

setTimeout(updateHeader, 2000);
