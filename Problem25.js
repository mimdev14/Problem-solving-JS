function memoize(fn) {
  const cache = {};

  return function (n) {
    if (n in cache) {
      console.log("From cache");
      return cache[n];
    }

    console.log("Computed");
    const result = fn(n);
    cache[n] = result;

    return result;
  };
}

const memoAdd = memoize(n => n + 10);

console.log(memoAdd(5)); // Computed → 15
console.log(memoAdd(5)); // From cache → 15
console.log(memoAdd(10)); // Computed → 20
console.log(memoAdd(10)); // From cache → 20