const arrayMirroring = require("../src/08");

test("array mirroring", () => {
  expect(arrayMirroring([1, 2, 3])).toStrictEqual([1, 2, 3, 3, 2, 1]);
});
