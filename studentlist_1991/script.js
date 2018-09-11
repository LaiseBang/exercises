"use strict";
let studentsJson;
hentJson();

//FETCH Json
async function hentJson() {
  let jsonData = await fetch("students.json");
  studentsJson = await jsonData.json();
  //console.log(studentsJson);
  createStudents("Gryffindor");
  createStudents("Hufflepuff");
  createStudents("Ravenclaw");
  createStudents("Slytherin");
}

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

//const house = object.keys(jasonData);
//console.log(house);
let newStudent;

//FUNCTION that creates students from json to template
function createStudents(house) {
  console.log(studentsJson);
  studentsJson[house].forEach(createASingleStudent);

  function createASingleStudent(name) {
    const newStudent = Object.create(StudentTemplate);
    newStudent.splitName(name);
    newStudent.house = house;
    students.push(newStudent);
    console.log(newStudent);
  }
}

//FUNCTION that sorts list according to firstname
function sortByFirstName(a, b) {
  if (a.firstName < b.firstName) {
    return -1;
  } else if (a.firstName > b.firstName) {
    return 1;
  } else {
    return 0;
  }
}
const studentsByfirstname = students.sort(sortByFirstName);
console.log(students);

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
