"use strict";

const names = [
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Neville Longbottom",
  "Luna Lovegood",
  "Cho Chang",
  "Justin Finch-Fletchly",
  "Draco Malfoy"
];

const houses = {
  Gryffindor: "Gryffindor",
  Hufflepuff: "Hufflepuff",
  Ravenclaw: "Ravenclaw",
  Slytherin: "Slytherin"
};

const students = [];

const student = {
  firstName: "",
  lastName: "",
  toString() {
    return this.firstName + " " + this.lastName;
  },

  splitName(fullName) {
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};
createStudents();

function createStudents() {
  names.forEach(createASingleStudent);
}
function createASingleStudent(name) {
  const myObject = Object.create(student);

  myObject.splitName(name);
  const randomHouse = Object.keys(houses)[
    Math.floor(Math.random() * Object.keys(houses).length)
  ];
  myObject.house = randomHouse;

  students.push(myObject);
}

function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}

function inGryffindor(student) {
  if (student.house === houses.Gryffindor) {
    return true;
  } else {
    return false;
  }
}

const gryffindorStudents = students.filter(inGryffindor);
students.sort(sortByLastName);

console.table(gryffindorStudents);

console.table(students);

// function createStudents(names) {
//   names.foreach(Student => {
//     const myObject = Object.create(Student);
//     myObject.splitName(names);
//     console.log();
//     students.push(myObject);
//   });
// }
