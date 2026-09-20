function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }

  return a;
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1