const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                         | expected
    ${[1, 0, 2, 0, 4, 2]}    | ${190}
    ${[0, 0, 0, 0, 0, 0]}    | ${0}
    ${[4, 4, 4, 4, 4]}       | ${600}
    ${[2, 1, 1, 3, 0, 0]}    | ${110}
    ${[1, 2, 3, 4]}          | ${220}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});