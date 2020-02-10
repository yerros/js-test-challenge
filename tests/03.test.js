const mebiToKiby = require("../src/03");

test("convert 5 mebi to kibbi equal 5120", () => {
  expect(mebiToKiby(5)).toBe(5120);
});
