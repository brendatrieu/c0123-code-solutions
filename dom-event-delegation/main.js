var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    var $closestTask = event.target.closest('.task-list-item');
    console.log("Target's closest task list item: ", $closestTask);
    $closestTask.remove();
  }
  console.log('Event target: ', event.target);
  console.log('Target tag name: ', event.target.tagName);
});
