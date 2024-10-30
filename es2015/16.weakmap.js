var weakMap = new WeakMap();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// TODO: Fix this fils linting etc.
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let obj1 = {} // TODO: Why is this passing without the `;` ???
var obj2 = {}


weakMap.set(obj1, 1);
weakMap.set(obj2, 2);
weakMap.set({}, {"four": 4});

console.log(weakMap.get(obj2)); // 2
console.log(weakMap.has({})); // return false even though empty object exists as key. Because the keys have different references

delete obj2;
console.log(weakMap.get(obj2)); // 2
weakMap.delete(obj1)
console.log(weakMap.get(obj1)); //undefined