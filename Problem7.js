function countVowels(str) {
  let count = 0;

  for (const char of str.toLowerCase()) {
    if ('aeiou'.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('hello'));      // 2
console.log(countVowels('javascript')); // 3