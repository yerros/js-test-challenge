const repeatLetter = require("../src/07");

test("repeat letter...", () => {
  expect(repeatLetter("Hello World! ", 2)).toBe("HHeelllloo WWoorrlldd!! ");
});
