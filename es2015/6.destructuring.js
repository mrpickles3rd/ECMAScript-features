// Object destructuring
const user = { firstName: 'John', lastName: 'Smith' };
const { firstName, lastName } = user;
console.log(firstName, lastName); // John, Smith

// Array destructuring
const [
  one,
  two,
  // eslint-disable-next-line comma-dangle
  three // TODO: Are dangling commas tested yet?
] = ['one', 'two', 'three'];
console.log(one, two, three); // one, two, three
