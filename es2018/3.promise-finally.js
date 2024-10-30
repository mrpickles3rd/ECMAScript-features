let isLoading = true;
fetch('http://somesite.com/users')
  .then((data) => data.json())
  .catch((err) => console.error(err))
  .finally(() => {
    console.log('Finished loading!!', isLoading);
    isLoading = false;
    console.log('Finished loading!!', isLoading);
  });
