/* eslint-disable comma-dangle */
// Object argument
const countries = {
  IN: 'India',
  SG: 'Singapore' // TODO: Are dangling commas tested yet?
};
Object.values(countries); // ['India', 'Singapore']

// Non-object argument
console.log(Object.values(['India', 'Singapore'])); // ['India', 'Singapore']
console.log(Object.values('India')); // ['I', 'n', 'd', 'i', 'a']
