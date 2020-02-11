function isIsogram(str) {
  return (
    str.split("").filter((item, pos, arr) => arr.indexOf(item) == pos).length ==
    str.length
  );
}

module.exports = isIsogram;
