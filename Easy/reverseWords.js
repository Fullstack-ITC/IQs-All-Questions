/*
Create a function that takes in a string and reverses the order of words in it, but not the letters within the words. A word is defined as a sequence of non-space characters.

Examples
reverseWords("I love coding") ➞ "coding love I"

reverseWords("JavaScript is great") ➞ "great is JavaScript"

reverseWords("OpenAI is awesome") ➞ "awesome is OpenAI"
Notes
If the input is an empty string, return an empty string.
*/

function reverseWords(s) {
  return s.split(' ').reverse().join(' ');
}
  
  exports.solution = reverseWords;
  