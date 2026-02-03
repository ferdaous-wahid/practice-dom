const student = {
  name: "Alice",
  1: 50,
  "home-address": "123 Main St",
  marks: 90,
};
// console.log(student);
// dot notation
const studentName = student.name;
// console.log(student);

// bracket notation
const studentName2 = student["name"];
const studentAddress = student["home-address"];
// console.log(studentName2);

for (let key in student) {
  const value = student[key];
}

const propname = "marks";
console.log(student[propname]);
