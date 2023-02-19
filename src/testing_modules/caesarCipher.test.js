const { caesarCipher } = require("./caesarCipher");

test("cipher a simple string ", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("cipher a simple string with high shift", () => {
  expect(caesarCipher("hello", 32)).toBe("nkrru");
});

test("cipher a simple string with negative shift", () => {
  expect(caesarCipher("hello", -3)).toBe("ebiil");
});

test("cipher an uppercase string", () => {
  expect(caesarCipher("DOG", 5)).toBe("ITL");
});

test("cipher an uppercase string with spaces", () => {
  expect(caesarCipher("ATTACK AT ONCE", 4)).toBe("EXXEGO EX SRGI");
});

test("cipher a string with punctuation", () => {
  expect(caesarCipher("ATTACK AT ONCE!", 4)).toBe("EXXEGO EX SRGI!");
});

test("Cipher an empty string", () => {
  expect(caesarCipher("", 4)).toBe("");
});
