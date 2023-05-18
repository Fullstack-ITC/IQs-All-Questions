const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}-sol.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                                                              | expected
    ${[{ name: "Superman", powerLevel: 100 }, { name: "Batman", powerLevel: 85 }, { name: "Spiderman", powerLevel: 120 }]} | ${"Spiderman"}
    ${[{ name: "Flash", powerLevel: 200 }, { name: "Hulk", powerLevel: 200 }, { name: "Thor", powerLevel: 150 }]} | ${["Flash", "Hulk"]}
    ${[{ name: "Wolverine", powerLevel: 80 }, { name: "Ironman", powerLevel: 100 }, { name: "Captain America", powerLevel: 90 }]} | ${"Ironman"}
    ${[{ name: "Green Lantern", powerLevel: 120 }, { name: "Aquaman", powerLevel: 80 }, { name: "Superman", powerLevel: 120 }]} | ${["Green Lantern", "Superman"]}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toEqual(expected);
  });
});
