"use strict";

window.addEventListener("DOMContentLoaded", init);

const dataArray = [];

function init() {
  console.log("init");
  let data = document.querySelectorAll("#bars");
  buildDataArray();
  document.querySelector("#bars").addEventListener("animationiteration", loop);
  // loop();
}

function loop() {
  scrollDataArray();
  displayDataArray();

  //setTimeout(loop, 500);
}

function buildDataArray() {
  //this function fill values in the first 40 bars
  for (let i = 0; i < 40; i++) {
    dataArray.push(getNewData());
  }
}

function scrollDataArray() {
  //remove first data from the beginning
  dataArray.shift();

  //add new data at the end
  dataArray.push(getNewData());
  console.log(dataArray);
}
function getNewData() {
  const randomNumber = Math.random() * 100;
  return randomNumber;
}

function displayDataArray() {
  document.querySelectorAll("#bars>.bar").forEach(displayDataBar);
}

function displayDataBar(element, index) {
  element.style.height = dataArray[index] + "px";
}
