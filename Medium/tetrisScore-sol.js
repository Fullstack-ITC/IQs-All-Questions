function calculateTetrisScore(turns) {
  let score = 0;
  for (let turn of turns) {
    if (turn === 1) {
      score += 10;
    } else if (turn === 2) {
      score += 30;
    } else if (turn === 3) {
      score += 60;
    } else if (turn === 4) {
      score += 120;
    }
  }
  return score;
}

exports.solution = calculateTetrisScore;