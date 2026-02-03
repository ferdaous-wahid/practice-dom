const numbers = [4, 5, 6, 19, 29];
const result = numbers.map((num, index) => {
  console.log(num * index);
  // return num * index;
});

// const doubled = [];
// for (const num of number) {
//   const result = num * 2;
//   doubled.push(result);
// }

// const doubleIt = (x) => x * 2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map((x) => x * 2); //mapping with arrow function
const squared = numbers.map((x) => x * x); //mapping with arrow function

// console.log(doubled);
const friends = ["abcd", "efgh", "ijkh"];
const nameLength = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0].toUpperCase);
// console.log(nameLength);
// console.log(nameLength);
