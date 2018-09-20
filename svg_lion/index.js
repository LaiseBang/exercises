/* //regarding divs change color from red to green, overriding original color
TweenMax.fromTo(
  "div div",
  3,
  { backgroundColor: "red" },
  { backgroundColor: "green" }
); */
/* 
// yoyo odd divs back and forth on x-axis in 3 s repeat 10 times
TweenMax.from("#app>div:nth-child(odd)", 3, {
  x: 500,
  yoyo: true,
  repeat: 10
}); */

/* //divs
TweenMax.from("#app>div:nth-child(even)", 3, { x: -500 });
TweenMax.from("#app>div:nth-child(3n+2)", 3, { y: 500 });
TweenMax.from("#app>div:nth-child(3n+3)", 3, { y: -500 });

TweenMax.staggerFrom(
  "#app>div",
  1.2,
  {
    x: 500,
    y: 500,
    rotation: 360
  },
  0.1
);
 */
const left = document.querySelectorAll("#lion #left path");
const right = document.querySelectorAll("#lion #right path");
const all = document.querySelectorAll("#lion path");
let tl = new TimelineMax({ repeat: 1, repeatDelay: 1 });

/* // Shatters the paths that will fly out
tl.staggerTo(left, 3, { x: -800, scale: 4 }, 0.015);
TweenMax.staggerTo(right, 3, { x: 800, scale: 4 }, 0.015);
 */
/* //moves left part 37 on the x-axis i 1s then moves 20 on the y-axis 
tl.to(left, 1, { x: 37 })
  .to(left, 2, { y: 20 })
  //then rotates all the individual paths right 180deg in 2s  
  .to(right, 2, { rotation: 180 }, "-=1")
  // move the parts to the left on the x-axis one at at time 
  .staggerFrom(right, 0.4, { x: 67 }, 0.01, "-=1"); 
 */

// fragments are scattered and gathers to form the image
/* tl.staggerFrom(
  all,
  0.01,
  {
    x: () => Math.random() * 1000 - 500,
    y: () => Math.random() * 1000 - 500
  },
  0.01
); */
