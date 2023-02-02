/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var revisedWords = [];
  for (var i = 0; i < words.length; i++) {
    revisedWords.push(words[i] + suffix);
  }
  return revisedWords;
}
