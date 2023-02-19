const { capitalize } = require("./capitalize");

test("Capitalize a word in lowercase ", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize a word in uppercase", () => {
  expect(capitalize("DOG")).toBe("Dog");
});

test("Capitalize an already capitalized word", () => {
  expect(capitalize("Sushi")).toBe("Sushi");
});

test("Capitalize a 0 length word", () => {
  expect(capitalize("")).toBe("");
});

test("Capitalized a random series of charachters in uppercase and lowercase", () => {
  expect(capitalize("hUmAn")).toBe("Human");
});
