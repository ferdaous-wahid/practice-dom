const students = [
  { id: 1, name: "Ferdaous", marks: "98" },
  { id: 2, name: "Moti", marks: "88" },
  { id: 3, name: "Rabby", marks: "78" },
  { id: 4, name: "Shishir", marks: "68" },
];
const names = students.map((student) => student.marks * 0.75);
const goodStudent = students.find((student) => student.marks > 85);
const goodStudents = students.filter((student) => student.marks > 85);
console.log(names);
console.log(goodStudent);
console.log(goodStudents);
