let students = [
  { name: "John", marks: 85, grade: "A" },
  { name: "David", marks: 72, grade: "B" },
  { name: "Peter", marks: 90, grade: "A+" },
  { name: "Sarah", marks: 65, grade: "C" }
];
console.log("All Students:");
students.forEach(function(student) {
  console.log(student.name + " - " + student.marks + " - " + student.grade);
});
let studentNames = students.map(function(student) {
  return student.name;
});
console.log("\nStudent Names:");
console.log(studentNames);
let topStudents = students.filter(function(student) {
  return student.marks >= 80;
});
console.log("\nStudents who scored 80 or above:");
console.log(topStudents);
