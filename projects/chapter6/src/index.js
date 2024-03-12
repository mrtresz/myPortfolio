"use strict";

document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(-10deg)";
document.getElementById("body").style.border = "2px solid black"
document.getElementById("mouth").style.borderRadius = "8px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#ff00ff";
document.getElementById("body").style.color = "#ff0000";
document.getElementById("head").style.borderTop = "5px yellow solid";

document.getElementById("nose").style.borderRadius = "50%";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";

// make the robot dance

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

let roboNose = document.getElementById("nose");
roboNose.addEventListener("click", moveNoseUpDown);

let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveUpDown(event) {
    let robotPart = event.target;
    let top = 0;

    let animation = setInterval(frame, 28);

    function frame() {
        robotPart.style.top = top++ + "%";
        if (top === 20) {
            top = 0;
        }
    }
}

function moveNoseUpDown(event) {
    let robotPart = event.target;
    let top = 0;

    let animation = setInterval(frame, 10);

    function frame() {
        robotPart.style.top = top++ + "%";
        if (top === 50) {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(event) {
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame, 18);

    function frame() {
        robotPart.style.left = left++ + "%";
        if (left === 71) {
            left = 10;
        }

    }
}




