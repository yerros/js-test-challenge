const User = require("../src/11");

test("find user by username", () => {
  expect(User.findByUsername("johndoe")).toStrictEqual({
    id: 3,
    username: "johndoe",
    name: "John Doe"
  });
});
