let john = { name: 'John' };

const rocky = { name: 'Rocky' };
const alex = { name: 'Alex' };
const nick = { name: 'Nick' };

const myUserSet = new WeakSet();

myUserSet.add(john);
myUserSet.add(rocky);
myUserSet.add(john);
myUserSet.add(nick);

console.log(myUserSet.has(john)); // true
console.log(myUserSet.has(alex)); // false
console.log(myUserSet.delete(nick));
console.log(myUserSet.has(nick)); // false

john = null;
