const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a|b|expected
    ${[1,2,3,4,5]}|${9}|${[3, 4]}
    ${[2,7,11,15]}|${9}|${[0, 1]}
    ${[3,2,4]}|${6}|${[1, 2]}
    ${[2, 7, 11, 15]}|${26}|${[2, 3]}
    ${[3, 2, 3]}|${6}|${[0, 2]}
    ${[3, 2, 4]}|${10}|${[-1, -1]}
  `
    ("returns $expected when calling with the following param/s: a, b", ({
      a,
      b,
      expected
    }) => {
      expect(file.solution(a, b)).toStrictEqual(expected);
    });
});