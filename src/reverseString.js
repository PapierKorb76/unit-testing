const reverseString = (word) => {
  let wArr = word.split("");
  for (let i = 0, j = word.length; i < word.length && j >= 0; i++, j--) {
    wArr[i] = word.substr(j - 1, 1);
  }
  return wArr.join("");
};

module.exports = { reverseString };
