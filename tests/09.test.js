const symmetrical = require("../src/09");

test("check symmetrical or not?", () => {
  expect(symmetrical("tidur")).toBe(false);
});
