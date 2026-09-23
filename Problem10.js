function countChar(str, char) {
  let count = 0;

  for (const currentChar of str) {
    if (currentChar === char) {
      count++;
    }
  }

  return count;
}

console.log(countChar('banana', 'a')); // 3
console.log(countChar('hello', 'l'));  // 2