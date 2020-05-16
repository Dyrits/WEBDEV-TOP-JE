const caesar = function (string, shift) {
  shift < 0 ? shift = shift % 26 + 26 : shift %= 26;
  return string.split("").map(letter => {
    if (/[a-z]/.test(letter)) { var codeChar = (letter.charCodeAt(0) + shift - 97) % 26 + 97 }
    if (/[A-Z]/.test(letter)) { var codeChar = (letter.charCodeAt(0) + shift - 65) % 26 + 65 }
    if (codeChar) { return String.fromCharCode(codeChar); }
    return letter;
  }).join("");
}

module.exports = caesar
