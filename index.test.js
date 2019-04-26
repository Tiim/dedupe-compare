const dedupe = require("./index");

test("with ints", () => {
  const array = [1, 1, 2, 2, 3, 1, 5];
  const expected = [1, 2, 3, 5];

  const result = dedupe(array);
  expect(result).toEqual(expected);
});

test("with strings", () => {
  const array = ["1", "1", "2", "2", "3", "1", "5"];
  const expected = ["1", "2", "3", "5"];

  const result = dedupe(array);
  expect(result).toEqual(expected);
});

test("with mixed", () => {
  const array = ["1", 1, "2", 2, "3", 3];
  const expected = ["1", 1, "2", 2, "3", 3];

  const result = dedupe(array);
  expect(result).toEqual(expected);
});

test("with objects", () => {
  const array = [{ a: "x", b: "y" }, { a: "x", b: "y" }, { a: "b", b: "y" }];
  const expected = [{ a: "x", b: "y" }, { a: "b", b: "y" }];
  const equal = (x, y) => x.a === y.a;

  const result = dedupe(array, equal);
  expect(result).toEqual(expected);
});
