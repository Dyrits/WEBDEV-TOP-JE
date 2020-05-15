const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return string.split("").reverse().join("") === string;
};

module.exports = palindromes
