const array = [1, 2, 3, 4, 5, 6];
if (array.includes(5)) {
  console.log('Found an element');
}

// eslint-disable-next-line no-sparse-arrays
const numbers = [1, 2, 3, 4, NaN, ,];
console.log(numbers.includes(NaN)); // true
console.log(numbers.includes(undefined)); // true
