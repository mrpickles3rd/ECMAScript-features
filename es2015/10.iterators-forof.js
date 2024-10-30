/* eslint-disable comma-dangle */
// TODO: Is this the best to to test something?
//       Is this to clever for this stage of testing?
const collection = {
  one: 1,
  two: 2,
  three: 3,
  [Symbol.iterator]() { // TODO: What is and can we use `Symbol.iterator` at this point in the tests?
    const values = Object.keys(this);
    let i = 0;
    return {
      next: () => ({
        // eslint-disable-next-line no-plusplus
        value: this[values[i++]],
        done: i > values.length // TODO: Are dangling commas tested yet?
      }) // TODO: Are dangling commas tested yet?
    };
  } // TODO: Are dangling commas tested yet?
};

const iterator = collection[Symbol.iterator]();

console.log(iterator.next()); // → {value: 1, done: false}
console.log(iterator.next()); // → {value: 2, done: false}
console.log(iterator.next()); // → {value: 3, done: false}
console.log(iterator.next()); // → {value: undefined, done: true}

// eslint-disable-next-line no-restricted-syntax
for (const value of collection) { // TODO: What is `no-restricted-syntax`? I need the internet :'(
  console.log(value);
}
