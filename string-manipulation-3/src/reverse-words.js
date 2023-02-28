/* exported reverseWords */

/**
 * PSEUDOCODE:
 * Define a function 'reverseWords' with a parameter 'string'.
 *  Declare a variable 'wordsArr' and assign 'string' split by blank strings.
 *  Declare a variable 'reversedStr' and assign an empty string.
 *  Declare a variable 'revSentence' and assign an empty string.
 *  Initiate for loop to iterate through each index of 'string'.
 *  At each index i:
 *    Initiate a for loop to iterate through each index j of 'wordsArr' at index i in reverse.
 *      Concatenate the value to 'reversedStr'.
 *      If the length of 'reversedStr' is equal to 'wordsArr' length at index i:
 *        Concatenate 'reversedStr' to 'revSentence'.
 *        Reassign 'reversedStr' to an empty string.
 *        If 'stringArr' at index i plus 1 is true:
 *          Concatenate an empty string to 'revSentence'.
 *  Return 'revSentence'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var reverseWords = string => {
  var wordsArr = string.split(' ');
  var reversedStr = '';
  var revSentence = '';
  for (var i = 0; i < wordsArr.length; i++) {
    for (var j = wordsArr[i].length - 1; j > -1; j--) {
      reversedStr += wordsArr[i][j];
    }
    if (reversedStr.length === wordsArr[i].length) {
      revSentence += reversedStr;
      reversedStr = '';
      if (wordsArr[i + 1]) {
        revSentence += ' ';
      }
    }
  }
  return revSentence;
};
