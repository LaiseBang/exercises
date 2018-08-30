/*Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.
Hint: use indexOf and substring (avoid substr, it is being deprecated).
Expect the name to be a const - you can’t modify it.*/

"use strict";
const fullName = "Peter Heronimous Lind";

const firstSpace = fullName.indexOf(" ");
const secondSpace = fullName.indexOf(" ", firstSpace + 1);

const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, secondSpace);
const lastName = fullName.substring(secondSpace + 1);

/*console.log(`First space at ${firstSpace}`);
console.log(`Second space at ${secondSpace}`);*/
console.log(firstName);
console.log(middleName);
console.log(lastName);
