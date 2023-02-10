var bookArr = [{
  isbn: '123-456-789',
  title: 'Cat in the Hat',
  author: 'Dr. Seuss'
}, {
  isbn: '456-789-123',
  title: 'Catcher in the Rye',
  author: 'J.D. Salinger'
}, {
  isbn: '789-123-456',
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald'
}
];

console.log('bookArr: ', typeof bookArr);

var bookArrJSON = JSON.stringify(bookArr);
console.log('stringified bookArr: ', bookArrJSON, typeof bookArrJSON);

var studentJSON = '{"numId":1232456, "name":"Brenda"}';
console.log('student JSON: ', studentJSON, typeof studentJSON);

var studentJSONPar = JSON.parse(studentJSON);
console.log('student JSON parsed: ', studentJSONPar, typeof studentJSONPar);
