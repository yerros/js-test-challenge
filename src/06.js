function repeatString(str, time) {
  let stringrepeat = "";
  for (let i = 1; i <= time; i++) {
    stringrepeat += str;
  }
  return stringrepeat;
}
console.log(repeatString("Makan! ", 3));
module.exports = repeatString;
