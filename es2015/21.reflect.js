/* eslint-disable comma-dangle */
/* eslint-disable max-classes-per-file */
// Creating objects using Reflect.construct()
class UserClass1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const args = ['John', 'Emma'];

let john = Reflect.construct(
  UserClass1,
  args // TODO: Are dangling commas tested yet?
);

console.log(john instanceof UserClass1);
console.log(john.fullName); // John Doe

// Calling a function using Reflect.apply()
const max = Reflect.apply(Math.max, Math, [100, 200, 300]);
console.log(max);

// Defining a property using Reflect.defineProperty()
class UserClass2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

john = new UserClass2('John', 'Resig');

if (Reflect.defineProperty(john, 'age', {
  writable: true,
  configurable: true,
  enumerable: false,
  value: 33 // TODO: Are dangling commas tested yet?
})) {
  console.log(john.age);
} else {
  console.log('Cannot define the age property on the user object.');
}

// Delete property using Reflect.deleteProperty()
let user = {
  name: 'John',
  age: 33 // TODO: Are dangling commas tested yet?
};

console.log(Reflect.deleteProperty(user, 'age')); // true
console.log(user.age); // undefined

// Get property of an object using Reflect.get()
user = {
  name: 'John',
  age: 33 // TODO: Are dangling commas tested yet?
};

console.log(Reflect.get(user, 'age')); // 33
