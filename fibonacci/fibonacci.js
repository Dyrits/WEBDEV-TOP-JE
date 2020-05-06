const fibonacci = function(number) {
  if (number < 0) { return "OOPS"; }
  return number < 2 ? Number(number) : fibonacci(number - 1) + fibonacci(number - 2);
}

module.exports = fibonacci