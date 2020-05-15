const caesar = function(string, shift) {
  if (shift > 26) { shift %= 26; }
  return string.split("").map(letter => {
    if ((letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91)) {
      var codeChar = letter.charCodeAt(0) + shift
      if(codeChar > 90) { codeChar -= 26; } 
      else if(codeChar < 65) { codeChar += 26; }
    }
    if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
      var codeChar = letter.charCodeAt(0) + shift
      if(codeChar > 122) { codeChar -= 26; } 
      else if(codeChar < 97) { codeChar += 26; }
    }
    if (codeChar) { return String.fromCharCode(codeChar); }
    return letter;
  }).join("");
}

module.exports = caesar
