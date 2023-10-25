// This function returns a function that returns a string
function sayHello2(): () => string {
  return () => "Hello!";
}
// This variable contains a function that returns a string
const hello2 = sayHello();
// Calling the function returns the string
console.log(hello()); // Hello!
console.log(hello()); // Hello!
console.log(hello()); // Hello!
console.log(hello()); // Hello!

function mathematizer2(n: number): (x: number) => number {
  let sum = n;
  return (x) => x * n;
}

const m2 = mathematizer2(3);
console.log(m2(3)); // 9
console.log(m2(2)); // 6
console.log(m2(10)); // 30
console.log(m2(111)); // 333
