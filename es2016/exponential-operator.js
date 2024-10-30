// Prior ES7
// eslint-disable-next-line prefer-exponentiation-operator, no-restricted-properties
const cube = (x) => Math.pow(x, 3); // TODO: `no-restricted-properties` ???
console.log(cube(3)); // 27

// Using ES7
const cube1 = (x) => x ** 3;
console.log(cube1(3)); // 27
