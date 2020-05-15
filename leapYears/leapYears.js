const leapYears = function(year) {
  return !(year % 400) || (!(year % 4) && !!(year % 100));
}

module.exports = leapYears
