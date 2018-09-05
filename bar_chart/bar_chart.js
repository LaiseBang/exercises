"use strict";

window.addEventListener("DOMContentLoaded", init);

let dataArray = [];

function init() {
  buildDataArray();
  let bars = document.querySelector(".bar").textContent;
  dataArray = Array.from(bars);
  setTimeout(loop, 1000);
}

function loop() {
  scrollDataArray();
  displayDataArray();
  setTimeout(loop, 1000);
}
function buildDataArray() {
  for (let i = 0; i < 40; i++) {
    dataArray.push(getNewData());
  }
}

function scrollDataArray() {
  let first = dataArray.shift();
  dataArray.push(getNewData());
}

let randomNumber;

function getNewData() {
  //get random number from 1-100
  randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}
console.log(randomNumber);

/* function displayDataArray(className, displayValue) {
  /*  let items = document.getElementsByClassName(".bar");
  for (let i = 0; i < items.length; i++) {
    items[i].style.height = newHeight;
  } 
  const newData = dataArray.slice(0, 100).join("");
  // display text string in html
  document.querySelector(".bar").style.height = newData;
} */

let newHeight;

function displayDataArray() {
  //console.log("test");
  dataArray.forEach(newHeight => {
    document.querySelector(".bar").style.height = dataArray[10] + "px";
    console.log(newHeight);
  });
  //displayDataBar();
}

// function displayDataBar(div, index) {
//   newHeight = document.querySelector(".bar").style.height =
//     dataArray[10] + "px";
//   console.log(newHeight);
// }
