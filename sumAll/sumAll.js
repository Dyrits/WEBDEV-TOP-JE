const sumAll = function (start, end) {
  if (start === end) { return end; }
  if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") { 
    return "Error";
  }
  if (end < start) { [start, end] = [end, start] }
  return start + sumAll(start + 1, end);
};

module.exports = sumAll;
