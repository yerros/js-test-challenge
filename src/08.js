function arrayMirroring(list) {
  const newArr = JSON.parse(JSON.stringify(list));
  const reverse = newArr.reverse();
  const reverseList = list.concat(reverse);
  return reverseList;
}

module.exports = arrayMirroring;
