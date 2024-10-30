const profile = {
  // eslint-disable-next-line comma-dangle
  age: 42
};

const descriptors = Object.getOwnPropertyDescriptors(profile);
console.log(descriptors); //  { age: { configurable: true, enumerable: true, writable: true } }
