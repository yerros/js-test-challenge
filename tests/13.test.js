const stats = require("../src/13");

test("get stats of number", () => {
  expect(stats([10, 2, 38, 23, 38, 23, 21])).toStrictEqual({
    mean: 22.142857142857142,
    median: 23,
    mode: { "23": 2, "38": 2 },
    largest: 38,
    smallest: 2,
    sum: 155,
    count: 7
  });
});
