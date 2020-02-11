function stats(arr) {
  let nilai = 0;
  const jumlah = arr.reduce((acc, cur) => acc + cur);
  const middle = Math.floor(arr.length / 2);
  const terbesar = Math.max(...arr);
  const terkecil = Math.min(...arr);
  const duplicate = arr.filter(a => arr.indexOf(a) !== arr.lastIndexOf(a));
  let counts = {};
  for (var i = 0; i < duplicate.length; i++) {
    counts[duplicate[i]] = counts[duplicate[i]] + 1 || 1;
  }

  return {
    mean: jumlah / arr.length,
    median: arr[middle],
    mode: counts,
    largest: terbesar,
    smallest: terkecil,
    sum: jumlah,
    count: arr.length
  };
}

module.exports = stats;
