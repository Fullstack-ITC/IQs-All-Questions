/*
A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

Examples
isWristband([
 ["A", "A"],
 ["B", "B"],
 ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
 ["A", "B"],
 ["A", "B"],
 ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
 ["A", "B", "C"],
 ["C", "A", "B"],
 ["B", "C", "A"],
 ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
 ["A", "B", "C"],
 ["B", "C", "A"],
 ["C", "A", "B"],
 ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband.
*/

function isWristband( /*args*/ ) {
  //your code
}

exports.solution = isWristband;