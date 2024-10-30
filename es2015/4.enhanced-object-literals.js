/* eslint-disable comma-dangle */
// Property shorthand
// eslint-disable-next-line one-var, one-var-declaration-per-line
const a = 1, b = 2, c = 3; // TODO: Test this implicitly?
const obj = {
  a,
  b,
  c // TODO: Are dangling commas tested yet?
};
console.log(obj);

// Method shorthand
const calculation = {
  sum(x, y) { return x + y; },
  multiply(x, y) { return x * y; } // TODO: Are dangling commas tested yet?
};

console.log(calculation.sum(5, 3)); // 15
console.log(calculation.multiply(5, 3)); // 15

// Computed Property Names
const key = 'three';
const computedObj = {
  one: 1,
  two: 2,
  [key]: 3 // TODO: Are dangling commas tested yet?
};
console.log('computedObj', computedObj);
