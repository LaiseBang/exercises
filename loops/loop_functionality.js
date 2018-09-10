"use strict";

const weasleys = [
  "Arthur",
  "Molly",
  "Bill",
  "Charlie",
  "Percy",
  "Fred",
  "George",
  "Ron",
  "Ginny",
  "Fred"
];

//display an array
function display(arr) {
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
  }
}
function indexOf(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return i;
    }
  }
  return -1;
}

function replace(arr, search, replace) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      arr[i] = replace;
    }
  }
}

function remove(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function allInfo(Item, index, arr) {
  console.log(`${Item} is the ${index}st element in:`);
  console.log(arr);
}
weasleys.forEach(allInfo);

//call the function display
display(weasleys);

// find the indexOf for Fred
let idx = indexOf(weasleys, "Fred");
console.log(idx);

//replace Fred with me
replace(weasleys, "Fred", "Laise");
//console.log(weasleys);

//remove me from array
remove(weasleys, "Laise");
//console.log(weasleys);
