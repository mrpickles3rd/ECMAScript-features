/* eslint-disable no-restricted-syntax */
const typeMap = new Map();

// eslint-disable-next-line quote-props
const keyObj = { 'one': 1 };

typeMap.set('10', 'string'); // a string key
typeMap.set(10, 'number'); // a numeric key
typeMap.set(true, 'boolean'); // a boolean key
typeMap.set(keyObj, 'object'); // an object key

console.log(typeMap.get(10)); // number
console.log(typeMap.get('10')); // string
console.log(typeMap.get(keyObj)); // object
// eslint-disable-next-line quote-props
console.log(typeMap.get({ 'one': 1 })); // undefined

console.log(typeMap.size); // 4

// OF
// for (let item of typeMap) {
for (const item of typeMap) {
  console.log('Loop 1', item);
}

// IN
// for (let item in typeMap) {
for (const item in typeMap) {
  // if (Object.hasOwn(typeMap, item)) { // Convert if to non-es22
  if (Object.prototype.hasOwnProperty.call(typeMap, item)) {
    console.log('Loop 2', item);
  }
}
