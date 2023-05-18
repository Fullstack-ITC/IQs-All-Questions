/*
In an alternate universe, dogs can talk and write JavaScript. But they have their own way of doing things.

The dogs have created a barking function, but the way it works is a bit different. 
A dog's bark can be represented as "woof", "woofwoof", "woofwoofwoof", and so on. 

One "woof" is equal to 1, two "woof"s (woofwoof) is equal to 2, three "woof"s (woofwoofwoof) is equal to 3,
 and so on.

You're tasked with creating a function 'countBarks' which takes a string of a dog's bark and returns the 
equivalent number. 

Examples:

countBarks("woof") ➞ 1
countBarks("woofwoof") ➞ 2
countBarks("woofwoofwoofwoof") ➞ 4

Note: You can assume that the input string is always a valid dog bark (i.e., "woof" repeated a certain number of times).
*/

function countBarks(bark) {
  return bark.split('woof').length - 1;
}
  
  exports.solution = countBarks;
  