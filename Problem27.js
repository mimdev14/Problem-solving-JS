function mergeArrays(...arrays) {
  return arrays.reduce((merged, currentArray) => {
    return [...merged, ...currentArray];
  }, []);
}

console.log(mergeArrays([1, 2], [3, 4], [5]));
// [1, 2, 3, 4, 5]