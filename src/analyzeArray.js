const analyzeArray = (arr) => {
  return {
    average: arr.reduce((num, sum) => (sum += num), 0) / arr.length,
    min: arr.reduce((num, min) => (num > min ? min : num)),
    max: arr.reduce((num, max) => (num > max ? num : max)),
    length: arr.length
  };
};

module.exports = { analyzeArray };
