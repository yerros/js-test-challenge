function symmetrical(str) {
  let check = "";
  if (typeof str === "number") {
    check = str
      .toString()
      .split("")
      .reverse()
      .join("");
  } else {
    check = str
      .split("")
      .reverse()
      .join("");
  }
  if (check == str) {
    return true;
  } else {
    return false;
  }
}

module.exports = symmetrical;
