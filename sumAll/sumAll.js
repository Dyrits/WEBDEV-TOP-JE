const sumAll = function (start, end) {
  if (start === end) { return end; }
  return start + sumAll(start + 1, end);
};

module.exports = sumAll;
