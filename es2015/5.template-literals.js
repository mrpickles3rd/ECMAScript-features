// Template literals
const firstName = 'John';
console.log(`l1) Hello ${firstName}!
l2)     Good morning!
    l3) This is a 3 line string`);

// // Tagged template literals
// const Button = styled.a`
//       display: inline-block;
//       border-radius: 3px;
//     `

function callTempleateThingy(params) {
  console.log('callTempleateThingy(params)', params); // TODO: Why is this an Array ???
  console.log('Array.isArray(params)', Array.isArray(params));
}

// eslint-disable-next-line no-unused-expressions
callTempleateThingy`This is the arg for "callTempleateThingy"`;
