function factorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1