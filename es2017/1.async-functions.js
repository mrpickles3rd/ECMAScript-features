async function logger() {
  const data = await fetch('http://someapi.com/users'); // pause until fetch returns
  console.log(data);
}
logger();
