"use strict";

/*We want a function that can take a name in any case, e.g. “peter” or “PETER” and return the correct combination of upper and lower case, i.e “Peter”.
Create a function capitalize( str ), that receives a string in any case, and returns a similar string with the first character in upper case, and the rest lower case.
Test the function with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.

Important: The function must return the correct string, not log it to the console!
*/
const str = "PETer";
const firstLetter = str.substring(0, 1);
const restLetters = str.substring(1);

window.addEventListener("load", capitalize);

function capitalize(str) {
  const newName = firstLetter.toUpperCase() + restLetters.toLowerCase();
  document.querySelector("#nameHere").textContent = newName;
}
