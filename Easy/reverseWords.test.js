const path = require("path");
const filePath = `./${path.basename(__filename).split('.')[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a|expected
    ${"I love coding"}|${"coding love I"}
    ${"JavaScript is great"}|${"great is JavaScript"}
    ${"OpenAI is awesome"}|${"awesome is OpenAI"}
    ${"I"}|${"I"}
    ${""}|${""}
  `
    ("returns $expected when calling with the following param/s: a", ({
      a,
      expected
    }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    });
});
