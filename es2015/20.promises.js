// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

promise.then((result) => {
  console.log(result); // 1
  return result * 2;
}).then((result) => {
  console.log(result); // 2
  return result * 3;
}).then((result) => {
  console.log(result); // 6
  return result * 4;
}).catch((error) => {
  console.log(error);
});
