const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                      | expected
    ${"woof"}              | ${1}
    ${"woofwoof"}          | ${2}
    ${"woofwoofwoofwoof"}  | ${4}
    ${"woofwoofwoof"}      | ${3}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
