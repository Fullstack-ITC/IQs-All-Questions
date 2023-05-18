/*
In the video game Tetris, players score by completing rows with blocks.
 We want to model a simplified scoring system for a Tetris game.

Write a function called 'calculateTetrisScore' that takes an array of integers,
where each integer represents the number of complete rows in a single turn. 
The scoring system should be as follows:

- If no rows were completed in a turn, the player scores 0.
- For each single row completed, the player scores 10.
- For two rows completed, the player scores 30.
- For three rows completed, the player scores 60.
- For four rows (a 'Tetris'), the player scores 120.

The function should return the total score of the game.

Examples:

calculateTetrisScore([1, 0, 2, 0, 4, 2]) ➞ 320
calculateTetrisScore([0, 0, 0, 0, 0, 0]) ➞ 0
calculateTetrisScore([4, 4, 4, 4, 4]) ➞ 600
*/

function calculateTetrisScore(turns) {
 
}

exports.solution = calculateTetrisScore;