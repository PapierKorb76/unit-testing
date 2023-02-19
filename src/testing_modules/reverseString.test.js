const { reverseString } = require("./reverseString");

test("Reverse a word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverse an even length word", () => {
  expect(reverseString("guitar")).toBe("ratiug");
});

test("Reverse an odd length word", () => {
  expect(reverseString("Paris")).toBe("siraP");
});

test("Reverse a 0 length word", () => {
  expect(reverseString("")).toBe("");
});

test("Reverse a word with random punctuation", () => {
  expect(reverseString("b.aske t bal,")).toBe(",lab t eksa.b");
});
