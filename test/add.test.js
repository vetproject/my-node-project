// test/add.test.js
const assert = require("assert");
const add = require("../index");

describe("Addition function", () => {
  it("should return 5 when 2 + 3", () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it("should return 0 when -1 + 1", () => {
    assert.strictEqual(add(-1, 1), 0);
  });
});
