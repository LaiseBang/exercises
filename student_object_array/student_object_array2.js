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

const Student = {
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
// call the function that iterates the array and assigns the houses to the students at random (Sortinghat)
createStudents();

//Sorting hat, assigns each student to a random house
function createStudents() {
  names.forEach(createASingleStudent);
}
function createASingleStudent(name) {
  const myObject = Object.create(Student);

  myObject.splitName(name);

  const randomHouse = Object.keys(houses)[
    Math.floor(Math.random() * Object.keys(houses).length)
  ];
  myObject.house = randomHouse;

  students.push(myObject);
  console.log(myObject);
}

function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}
/* 
function inGryffindor(Student) {
  if (Student.house === houses.Gryffindor) {
    return true;
  } else {
    return false;
  }
}

const gryffindorStudents = students.filter(inGryffindor);
students.sort(sortByLastName); */

function StudentsInHouse(house) {
  const houseStudents = students.filter(inHouse);

  function inHouse(student) {
    if (student.house === house) {
      return true;
    } else {
      return false;
    }
  }
  return houseStudents;
}
