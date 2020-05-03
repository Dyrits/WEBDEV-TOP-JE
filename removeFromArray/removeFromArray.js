const removeFromArray = function (array, ...elements) {
  return array.filter((element) => !elements.includes(element));
};

module.exports = removeFromArray
