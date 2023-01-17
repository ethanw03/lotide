let middle = function (array) {
  let evenNumber = array.length % 2 === 0;
  let median = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (evenNumber) {
    return [array[median - 1], array[median]]
  } else {
    return [array[median]]
  }
};

module.exports = middle;