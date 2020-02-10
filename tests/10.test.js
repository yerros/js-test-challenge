const censor = require("../src/10");

test("censor word", () => {
  expect(
    censor("Pada hari Minggu saya tidur siang.", ["minggu", "tidur"], "******")
  ).toBe("Pada hari ****** saya ****** siang.");
});
