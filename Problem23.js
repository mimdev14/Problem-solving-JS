function makeCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },

    getCount: function () {
      return count;
    }
  };
}

const c = makeCounter();

c.increment();
c.increment();

console.log(c.getCount()); // 2

c.decrement();

console.log(c.getCount()); // 1