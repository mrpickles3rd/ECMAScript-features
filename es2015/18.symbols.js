/* eslint-disable no-restricted-syntax */
// 1. Object properties
const id = Symbol('id');
const user = {
  name: 'John',
  age: 40,
  // eslint-disable-next-line comma-dangle
  [id]: 111
};

/* LINT FIX:
for (const item in typeMap) {
  // if (Object.hasOwn(typeMap, item)) { // Convert if to non-es22
  if (Object.prototype.hasOwnProperty.call(typeMap, item)) {
    console.log('Loop 2', item);
  }
}
*/

// for (let key in user) {
for (const key in user) {
  // if (Object.hasOwn(typeMap, item)) { // Convert if to non-es22
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    console.log(key); // name, age without symbols
  }
}

console.log(JSON.stringify(user)); // {'name':'John', 'age': 40}
console.log(Object.keys(user)); // ['name', 'age']

// eslint-disable-next-line prefer-template
console.log('User Id: ' + user[id]); // Direct access by the symbol works

// 2. Unique constants
const logLevels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn'),
  ERROR: Symbol('error'),
};
console.log(logLevels.DEBUG, 'debug message');
console.log(logLevels.INFO, 'info message');

// 3. Equality Checks

// eslint-disable-next-line no-self-compare
console.log(Symbol('foo') === Symbol('foo')); // false
// eslint-disable-next-line no-self-compare
console.log(Symbol.for('foo') === Symbol.for('foo')); // true
