const numbers = [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const greaterNumber = numbers.filter((x) => x > 10);
const evenNumbers = numbers.filter((x) => x % 2 === 0);

console.log(evenNumbers);
console.log(greaterNumber);
