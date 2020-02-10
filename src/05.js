function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

module.exports = isPrime;
