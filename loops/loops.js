for (let counter = 0; counter < 10; counter++) {
  // console.log(counter);
}

// this shows an error because the variable is created in the for loop. If you want to do this, define hte variable outside the for loop
// console.log(`after the loop, counter is ${counter}`);

for (let counter = 1; counter < 11; counter++) {
  //console.log(counter);
}

for (let counter = 10; counter > 0; counter--) {
  // console.log(counter);
}
//console.log("liftoff");

for (let counter = 1; counter < 20; counter++) {
  if (counter % 2 == 0) continue;
  //  console.log(counter);
}

for (let counter = 1; counter < 16777216; counter *= 2) {
  // console.log(counter);
}

for (let counter = 111; counter < 138; counter += 3) {
  // console.log(counter);
}

for (let counter = 100; counter > 0; counter -= 10) {
  console.log(counter);
}
