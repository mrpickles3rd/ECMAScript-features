function sum(...args) {
  console.log('...args', args);
  // return args.reduce((previous, current) => { // TODO: Is `reduce` tested yet?
  // return previous + current;
  // });
  return args.reduce((previous, current) => previous + current, 0); // TODO: Is `reduce` tested yet?
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2, 3, 4, 5)); // 15
