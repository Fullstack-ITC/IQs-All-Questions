const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                                                                                                           | expected
    ${[{ name: "John", math: 90, english: 80, science: 85 }, { name: "Steve", math: 85, english: 95, science: 90 }, { name: "Emily", math: 93, english: 82, science: 89 }]} | ${[{ name: "John", average: 85 }, { name: "Steve", average: 90 }, { name: "Emily", average: 88 }]}
    ${[{ name: "Alice", math: 84, english: 92, science: 76 }, { name: "Bob", math: 78, english: 85, science: 82 }, { name: "Charlie", math: 92, english: 88, science: 91 }]} | ${[{ name: "Alice", average: 84 }, { name: "Bob", average: 81.67 }, { name: "Charlie", average: 90.33 }]}
    ${[{ name: "Tom", math: 95, english: 80, science: 88 }, { name: "Jerry", math: 85, english: 95, science: 90 }, { name: "Spike", math: 80, english: 70, science: 85 }]} | ${[{ name: "Tom", average: 87.67 }, { name: "Jerry", average: 90 }, { name: "Spike", average: 78.33 }]}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toEqual(expected);
  });
});