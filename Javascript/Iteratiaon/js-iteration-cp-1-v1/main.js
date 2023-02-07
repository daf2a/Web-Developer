function reverseUnique(word) {
  let res = "";
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] !== word[i - 1]) {
      res += word[i];
    }
  }
  return res;
}

console.log(reverseUnique("greating")); //gnitaerg
console.log(reverseUnique("learning")); //gninrael
console.log(reverseUnique("book")); // kob
console.log(reverseUnique("RuangGuru")); //uruGnauR
console.log(reverseUnique("I am reading a book how to hunt a deer")); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
