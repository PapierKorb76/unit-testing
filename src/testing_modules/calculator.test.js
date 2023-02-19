const { calculator } = require("./calculator");

test("Addition test", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("Subtraction test", () => {
  expect(calculator.sub(3, 2)).toBe(1);
});

test("Multiplication test", () => {
  expect(calculator.mul(6, 8)).toBe(48);
});

test("Division test", () => {
  expect(calculator.div(8, 2)).toBe(4);
});

test("Dividing number with return double", () => {
  expect(calculator.div(9, 5)).toBe(1.8);
});

test("Dividing by zero", () => {
  expect(calculator.div(2, 0)).toBe(Infinity);
});
