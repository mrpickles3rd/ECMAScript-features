/* eslint-disable comma-dangle */
const target = {
  name: 'John',
  age: 3 // TODO: Are dangling commas tested yet?
};

const handler = {
  // eslint-disable-next-line no-shadow, arrow-body-style
  get: (target, prop) => {
    return prop in target
      ? target[prop]
      : `${prop} does not exist`;
  } // TODO: Are dangling commas tested yet?
};

const user = new Proxy(target, handler);
console.log(user.name); // John
console.log(user.age); // 3
console.log(user.gender); // gender does not exist

// validations

const ageValidator = {
  set: (obj, prop, value) => {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('Invalid age');
      }
    }

    // eslint-disable-next-line no-param-reassign
    obj[prop] = value; // The default behavior to store the value

    return true; // Indicate success
  } // TODO: Are dangling commas tested yet?
};

const person = new Proxy({}, ageValidator);

person.age = 30;
console.log(person.age); // 30
person.age = 'old'; // Throws an exception
person.age = 200; // Throws an exception
