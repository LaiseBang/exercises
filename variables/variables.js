"use strict";
console.log("variables");

if (true == true) {
  var oldStyle = "Peter";
  let newStyle = "also Peter";
}

let newStyle = "Peter"; //declare a variable with the same name but different content, use let
console.log(oldStyle);
// when you use var, you can overwrite/redeclare the variable.
// If you use let you can not redeclare the variable by accident.
// ALWAYSl use const, only use let for counters
console.log(newStyle);
