const roman = require("../src/15");

test("convert roman to numeric", () => {
  expect(roman("MMXVIII")).toBe(2018);
});
