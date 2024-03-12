"use strict";

let secret = Math.floor(Math.random() * 20 + 1);

let guess;
while (guess !== secret) {
    let guess = parseInt(prompt("please guess the secret number (1-20)"));

    if (guess === secret) {
        alert("Wooray!!!, Correct Guess");
        break;
    } else if (guess > secret) {
        alert("Incorect, too high");
    }
    else if (guess < secret) {
        alert("Incorect, too low")
    }
    else {
        guess = parseInt(prompt("please guess the secret number (1-20)"));
    }
}