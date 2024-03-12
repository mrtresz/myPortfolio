"use strict";

let day = prompt("Enter your favourite day of the week: ").toLowerCase();
let response;

switch (day) {
    case "monday":
        response = "Ack";
        break;
    case "tuesday":
        response = "Taco day!";
        break;
    case "wednesday":
        response = "Halfway there!";
        break;
    case "thursday":
        response = "It's the new friday";
        break;
    case "friday":
        response = "Ladies and Gentlemen, Its the Weekend!!";
        break;
    case "saturday":
        response = "What a day!";
        break;
    case "sunday":
        response = "Keeping it Holy!"
        break;
    default:
        response = "I have not heard of that one ";
        break;
}

alert(response);