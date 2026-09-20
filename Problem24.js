function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const add = curry((a, b) => a + b);

console.log(add(2)(3)); // 5
console.log(add(10)(20)); // 30