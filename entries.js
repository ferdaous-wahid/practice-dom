const employee = {
  name: "Something",
  description: "QA",
  salary: 20000,
  experience: 2,
};

// const keys = Object.key(employee);
// const values = Object.values(employee);
// const entries = Object.entries();
// console.log(keys);
// console.log(values);
// console.log(entries);
// delete employee.salary;
delete employee.experience;
employee.salary = employee.salary + 5000;
console.log(employee);
