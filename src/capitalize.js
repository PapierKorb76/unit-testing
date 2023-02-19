const capitalize = (word) => {
  return word.length > 0
    ? word[0].toUpperCase() + word.substr(1, word.length).toLowerCase()
    : "";
};

module.exports = { capitalize };
