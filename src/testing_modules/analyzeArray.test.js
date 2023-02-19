const { analyzeArray } = require("../analyzeArray");

test("TEST #1", () => {
  expect(analyzeArray([2, 5, 10, 12, 16])).toStrictEqual({
    average: 9,
    min: 2,
    max: 16,
    length: 5
  });
});

test("TEST #2", () => {
  expect(analyzeArray([3, 8, 10, 14, 18])).toStrictEqual({
    average: 10.6,
    min: 3,
    max: 18,
    length: 5
  });
});

test("TEST #3", () => {
  expect(analyzeArray([6, 8, 12, 13, 19])).toStrictEqual({
    average: 11.6,
    min: 6,
    max: 19,
    length: 5
  });
});

test("TEST #4", () => {
  expect(analyzeArray([3, 9, 13, 14, 16])).toStrictEqual({
    average: 11,
    min: 3,
    max: 16,
    length: 5
  });
});

test("TEST #5", () => {
  expect(analyzeArray([2, 8, 11, 12, 14])).toStrictEqual({
    average: 9.4,
    min: 2,
    max: 14,
    length: 5
  });
});
