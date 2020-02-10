function censor(word, key, val) {
  const regex = new RegExp(key.join("|"), "gi");
  const censoredWord = /dolor|elit|quis|nisi|fugiat|proident|laborum/gi;
  const sensor = val || "###";
  const result = word.replace(regex, sensor);
  return result;
}

module.exports = censor;
