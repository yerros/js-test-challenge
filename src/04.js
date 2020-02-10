function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      output = true;
    } else {
      if (year % 400 === 0) {
        output = true;
      } else {
        output = false;
      }
    }
  } else {
    output = false;
  }
  return output;
}

module.exports = isLeapYear;
