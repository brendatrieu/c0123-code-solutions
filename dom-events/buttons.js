// Click Event
function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $click = document.querySelector('.click-button');

$click.addEventListener('click', handleClick);

// Mouseover Event
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $mouseover = document.querySelector('.hover-button');

$mouseover.addEventListener('mouseover', handleMouseover);

// Double-click Event
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick);
