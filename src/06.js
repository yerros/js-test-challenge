function repeatString(str, time) {
  let stringrepeat = "";
  for (let i = 1; i <= time; i++) {
    stringrepeat += str;
  }
  return stringrepeat;
}
module.exports = repeatString;
