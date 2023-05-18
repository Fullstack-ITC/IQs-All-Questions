function getAverageGrades(students) {
  return students.map(student => {
    const grades = Object.values(student).slice(1); // excluding the name
    const sum = grades.reduce((a, b) => a + b, 0);
    const average = sum / grades.length;
    return {
      name: student.name,
      average: Math.round(average * 100) / 100  // keeping only two decimal points for the average
    };
  });
}

exports.solution = getAverageGrades;