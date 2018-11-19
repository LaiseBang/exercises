"use strict";
console.log("Javascript is running..");

window.addEventListener("gamepadconnected", function (e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
});

// 1. create game-loop
function gameLoop() {
    requestAnimationFrame(gameLoop);

    // console.log("loop");
    //2. in each loop, read the gamepad
    const gamepads = navigator.getGamepads();
    const gamepad = gamepads[1];
    const buttons = gamepad.buttons;

    //3. write info to console
    // console.table(buttons);
    //console.log(gamepads);
    buttons.forEach((button, index) => {
        if (button.pressed) {
            document.querySelector(`.button:nth-child(${index + 1})`).classList.add("pressed");

        } else {
            document.querySelector(`.button:nth-child(${index + 1})`).classList.remove("pressed");

        }
    })



}

gameLoop()
