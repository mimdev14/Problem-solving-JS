function titleCase(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(titleCase('hello world')); // Hello World
console.log(titleCase('javascript is fun')); // Javascript Is Fun