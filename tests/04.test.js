const isLeapYear = require("../src/04");

test("is leap years?", () => {
  expect(isLeapYear(2001)).toBe(false);
});
