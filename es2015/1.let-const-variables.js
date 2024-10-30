let a = 1;
console.log(a, '- ROOT `a` set to `1`');

if (a === 1) {
  // Block var'
  let a = 2; // eslint-disable-line no-shadow
  console.log(a, '- BLOCK `a` set to `2`');

  a = 3;
  console.log(a, '- BLOCK `a` set to `3`');
}

console.log(a, '- ROOT `a` still set to `1`');

a = 4;
console.log(a, '- ROOT `a` set to `4`');

const x = 9;
console.log(x, '- ROOT `x` set to `9`');

if (x === 9) {
  // Block Scope var'
  const x = 8; // eslint-disable-line no-shadow
  console.log(x, '- BLOCK `x` set to `8`');

  try {
    // Can't reassign const var', but this is in a new block, so a new const is needed
    const y = 7;
    console.log(y, '- BLOCK `y` set to `7`');

    // The Linter is wright, but this is the test
    y = 6; // eslint-disable-line no-const-assign
    console.log(y, '- BLOCK `y` set to `7`');
    // POP!
  } catch (error) {
    // Shitty error output for test results (I don't want to see the full stack) and ESLint knows it :'(
    console.log('Reassigning var` "y" from `7` to `6` is bad! Error: ... `${error}`'); // eslint-disable-line no-template-curly-in-string
  }
}

console.log(x, '- BLOCK `x` still set to `9`');
