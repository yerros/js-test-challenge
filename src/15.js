const romanCode = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  I: 1
};

function roman(text) {
  let romanInt = 0;
  const arrText = text.split("");
  const entries = Object.entries(romanCode);
  for (let i = 0; i < arrText.length; i++) {
    for (const [prop, key] of entries) {
      if (arrText[i] === prop) {
        romanInt += key;
      }
    }
  }
  return romanInt;
}

module.exports = roman;
