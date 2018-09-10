"use strict";

//FETCH Json
//let jsonData = fetch("students.json");

//Mock jsonData
const jsonData = [
  "Hannah Abbot",
  "Susan Bones",
  "Justin Finch-Fletchly",
  "Ernie Macmillian",
  "Megan Jones",
  "Wayne Hopkins",
  "Leanne -unknown-"
];

const students = [];

//create OBJECT / Student_template, with firstname, lastname, toString, splitName
const StudentTemplate = {
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

let newStudent;

createStudents();

//FUNCTION that creates students from json to template
function createStudents() {
  jsonData.forEach(createASingleStudent);
}
function createASingleStudent(name) {
  const newStudent = Object.create(StudentTemplate);

  newStudent.splitName(name);

  students.push(newStudent);
  //console.log(newStudent);
}

//FUNCTION that sorts list according to firstname
function sortByFirstName(a, b) {
  if (a.firstName < b.firstName) {
    return -1;
  } else {
    return 1;
  }
}
const studentsByfirstname = students.sort(sortByFirstName);
console.table(studentsByfirstname);

//FUNCTION that sorts list according to lastname
function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}
const studentsByLastname = students.sort(sortByLastName);
console.table(studentsByLastname);

//FUNCTION that filters list of students from a single house
function studentsInHouse() {
  const houseStudents = students.filter(inHouse);

  function inHouse(student) {
    if (student.house === house) {
      return true;
    } else {
      return false;
    }
  }
  console.log(gryffindorStudents);
  const gryffindorStudents = students.filter(houseStudents);
  return houseStudents;
}
//FUNCTION that sorts according to house first, then according to firstname,
//this function must return a string.
function sortByHouseThenFirstname() {}
