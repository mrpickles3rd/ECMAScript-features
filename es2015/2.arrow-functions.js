/* eslint-disable arrow-body-style */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
// 1. Single parameter and single statement
var message = (name) => console.log('Hello, ' + name + '!'); // Arrow function with `()` arguments
message('Sudheer'); // Hello, Sudheer!

// 2. Multiple parameters and single statement
var multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6

// 3. Single parameter and multiple statements
// eslint-disable-next-line arrow-parens
var even = number => { // Arrow function *without* `()` arguments
  if (number % 2) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
};
even(5); // odd

// 4. Multiple parameters and multiple statements
// eslint-disable-next-line consistent-return
var divide = (x, y) => {
  if (y !== 0) {
    return x / y;
  }
};
console.log(divide(100, 5)); // 20

// 5. No parameter and single statement
var greet = () => console.log('Hello World!');
greet(); // Hello World!

// -=-=-=-=-=-=-=-=

// eslint-disable-next-line arrow-body-style
const arrowWithBrackets = (arg) => {
  return arg;
};
console.log('arrowWithBrackets', arrowWithBrackets('argX'));

// eslint-disable-next-line arrow-parens
const arrowWithoutBrackets = arg => {
  return arg;
};
console.log('arrowWithoutBrackets', arrowWithoutBrackets('argY'));

const arrowSingleLineReturn = (arg1, arg2) => arg1 + arg2;
console.log('arrowSingleLineReturn', arrowSingleLineReturn('argZ', 'argA'));

// eslint-disable-next-line arrow-parens
const arrowSingleLineReturnWithNoBrackets = arg => arg;
console.log('arrowSingleLineReturnWithNoBrackets', arrowSingleLineReturnWithNoBrackets('argZ'));

const arrowOneLineObjectReturn = () => ({ key: 'val' });
console.log('arrowOneLineObjectReturn()', arrowOneLineObjectReturn());

const arrowObject = {
  emptyWithSyntax: () => {},
  argWithSyntax: (arg) => {
    console.log('argWithSyntax', arg);
  },
  // eslint-disable-next-line arrow-parens
  argWithoutSyntax: arg => {
    console.log(arg);
  },
  singleLineReturn: (arg) => console.log(arg),
};

arrowObject.emptyWithSyntax();
arrowObject.argWithSyntax('...argWithSyntax...');
arrowObject.argWithoutSyntax('...argWithoutSyntax...');
arrowObject.singleLineReturn('...singleLineReturn...');
