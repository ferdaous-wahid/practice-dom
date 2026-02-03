const student = {
  name: "Alice",
  1: 50,
  family: {
    title: "Bhuiya",
    mother: {
      name: "Naznin Nahar",
      age: 45,
      job: "Homemaker",
    },
    father: {
      name: "Shah Alam",
      age: 52,
      job: "Govt. Employee",
    },
  },
  "home-address": "123 Main St",
  marks: 90,
};
console.log(student.family?.mother?.age);
