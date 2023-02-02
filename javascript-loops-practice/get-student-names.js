/* exported getStudentNames */
function getStudentNames(students) {
  var namesArr = [];
  for (var i = 0; i < students.length; i++) {
    namesArr.push(students[i].name);
  }
  return namesArr;
}
