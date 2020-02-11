const Item = require("../src/12");

test("check sale", () => {
  expect(Item.findById(5).isOnSale()).toBe(true);
});
