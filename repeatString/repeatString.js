const repeatString = function (string, iteration) {
  let result = "";
  for (iteration; iteration > 0; iteration--) {
    result += string;
  }
  return result;
};

module.exports = repeatString
