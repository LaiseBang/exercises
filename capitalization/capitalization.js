"use strict";

/*Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the first letter is uppercase, and the rest is lowercase. I.e. “Peter”.
Hint: use substring, toUpper, toLower and simple string concatenation

Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.
*/

const name = "peTer";
const firstLetter = name.substring(0, 1);
const restLetters = name.substring(1);

console.log(firstLetter.toUpperCase() + restLetters.toLowerCase());
