/*TweenMax.fromTo(
  "div div",
  3,
  {
    backgroundColor: "red"
  },
  {
    backgroundColor: "green"
  }
);

TweenMax.from("#app>div:nth-child(odd)", 3, {
  x: 500,
  yoyo: true,
  repeat: 10
});

TweenMax.from("#app>div:nth-child(even)", 3, { x: -500 });
TweenMax.from("#app>div:nth-child(3n+2)", 3, { y: 500 });
TweenMax.from("#app>div:nth-child(3n+3)", 3, { y: -500 });
*/
/*
TweenMax.staggerFrom(
  "#app>div",
  1.2,
  {
    x: 500,
    y: 500,
    rotation: 360
  },
  0.1
);*/

const left = document.querySelectorAll("#lion #left path");
const right = document.querySelectorAll("#lion #right path");
const all = document.querySelectorAll("#lion path");

/* TweenMax.staggerTo(
  left,
  5,
  {
    x: -800,
    opacity: 0,
    scale: 0.2
  },
  0.015
);
TweenMax.staggerTo(
  right,
  5,
  {
    x: 800,
    opacity: 0,
    scale: 0.2
  },
  0.015
); */

let tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });

/* tl.to(left, 2, { x: 37 })
  .to(left, 2, { y: 20 })
  .to(right, 2, { rotation: 180 }, "-=1")
  .staggerFrom(right, 0.4, { x: 67 }, 0.01, "-=1"); */

tl.staggerFrom(
  all,
  0.1,
  {
    x: () => Math.random() * 1000 - 500,
    y: () => Math.random() * 1000 - 500
  },
  0.1
);
