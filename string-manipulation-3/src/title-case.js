/* exported titleCase */

/**
 * PSEUDOCODE:
 * Define a function 'titleCase' that takes a parameter 'title'.
 *  Declare a variable 'wordsArr' and assign lowercased 'title' separated by blank strings.
 *  Declare a variable 'titleWords' and assign an empty array.
 *  Declare a variable 'minorWords' and assign an array of minor words.
 *  Initiate a for loop to iterate through each 'word' in 'wordsArr'.
 *    Declare a variable 'currWord' and assign an empty string.
 *    Initiate a for loop to iterate through each 'letter'.
 *      If the 'word' includes 'javascript':
 *        Concatenate 'JavaScript' and the remainder of 'word' to 'currWord'.
  *         Break.
  *     If the 'word' is 'api':
  *       Concatenate 'API' to 'currWord'.
  *       Break.
  *     If it is the first word and the first letter:
  *       Concatenate the upper case letter to 'currWord'
  *     If the previous letter was '-':
  *       Concatenate the upper case letter to 'currWord'
  *     If the last letter of the previous word is ':'
  *       Concatenate the upper case letter to 'currWord'
*       If it's the first letter and the word is not in the 'minorWords':
*         Concatenate the upper case letter to 'currWord'
*       Default:
*         Concatenate the letter to 'currWord'.
      Reassign 'currWord' as ''.
 *  Return 'titleWords'.
 */

var titleCase = title => {
  var wordsArr = title.toLowerCase().split(' ');
  var titleWords = [];
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var word = 0; word < wordsArr.length; word++) {
    var currWord = '';
    for (var letter = 0; letter < wordsArr[word].length; letter++) {
      var currLetter = wordsArr[word][letter];
      if (wordsArr[word].includes('javascript')) {
        currWord += 'JavaScript' + wordsArr[word].slice(10);
        break;
      } else if (wordsArr[word] === 'api') {
        currWord += 'API';
        break;
      } else if (word === 0 && letter === 0) {
        currWord += currLetter.toUpperCase();
      } else if (wordsArr[word][letter - 1] === '-') {
        currWord += currLetter.toUpperCase();
      } else if (letter === 0 && (wordsArr[word - 1][wordsArr[word - 1].length - 1] === ':')) {
        currWord += currLetter.toUpperCase();
      } else if (letter === 0 && minorWords.indexOf(wordsArr[word]) === -1) {
        currWord += currLetter.toUpperCase();
      } else {
        currWord += currLetter;
      }
    }
    titleWords.push(currWord);
  }
  return titleWords.join(' ');
};
