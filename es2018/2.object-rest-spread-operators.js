// Rest parameters

function myfunc(p1, p2, ...p3) {
  console.log(p1, p2, p3); // 1, 2, [3, 4, 5, 6]
}
myfunc(1, 2, 3, 4, 5, 6);

// spread operator
const myArray = [10, 5, 25, -100, 200, -200];
console.log(Math.max(...myArray)); // 200

// Rest parameters for objects
function myfunc1({ a, ...x }) {
  console.log(a, x); // 1, { b: 2, c: 3, d:4 }
}
myfunc1({
  a: 1,
  b: 2,
  c: 3,
  // eslint-disable-next-line comma-dangle
  d: 4
});

// spread operator for objects
// eslint-disable-next-line object-curly-newline
const myObject = { a: 1, b: 2, c: 3, d: 4 }; // TODO: Set lint rule for this!
const myNewObject = { ...myObject, e: 5 }; // { a: 1, b: 2, c: 3, d: 4, e: 5 }
console.log('myNewObject', myNewObject);
