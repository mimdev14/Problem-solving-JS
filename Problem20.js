function findDuplicateNames(arr) {
  const frequency = {};

  for (const person of arr) {
    const name = person.name;

    if (frequency[name]) {
      frequency[name]++;
    } else {
      frequency[name] = 1;
    }
  }

  return Object.keys(frequency).filter(
    name => frequency[name] > 1
  );
}

const users = [
  { name: 'Ali' },
  { name: 'Sara' },
  { name: 'Ali' }
];

console.log(findDuplicateNames(users));
// ['Ali']