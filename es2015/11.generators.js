function* myGenerator(i) {
  yield i + 10;
  yield i + 20;
  return i + 30;
}

const myGenObj = myGenerator(10);

console.log(myGenObj.next()); // 20, done false
console.log(myGenObj.next()); // 30, done false
console.log(myGenObj.next()); // 40, done TRUE
console.log(myGenObj.next()); // undefined, done TRUE ... TODO: Look into this :/

// TODO: Done?
