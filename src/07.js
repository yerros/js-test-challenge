function repeatLetter(str, time) {
  let repeated = "";
  let string = str.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      repeated += string[i].repeat(1);
    } else {
      repeated += string[i].repeat(time);
    }
  }
  return repeated;
}

module.exports = repeatLetter;
