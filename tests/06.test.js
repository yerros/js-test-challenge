const repeatString = require("../src/06");

test("repeat string", () => {
  expect(repeatString("Makan! ", 3)).toBe("Makan! Makan! Makan! ");
});
