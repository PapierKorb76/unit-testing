const convertRange = (text, regex, a, shift) =>
  text.replace(regex, (letter) =>
    String.fromCharCode(
      ((letter.charCodeAt() - a.charCodeAt() + shift) % 26) + a.charCodeAt()
    )
  );

const caesarCipher = (text, shift) => {
  text = convertRange(text, /[A-Z]/g, "A", shift);
  return convertRange(text, /[a-z]/g, "a", shift);
};

module.exports = { caesarCipher };
