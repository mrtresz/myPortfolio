"use strict";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const newQuoteBtn = document.querySelector('#new-quote');


const quotesArray = [{
    name: "Wayne Dyer",
    quote: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles."
},
{
    name: "Theodore Roosevelt",
    quote: "Believe you can and you're halfway there."
},
{
    name: "Pablo Picasso",
    quote: "Learn the rules like a pro, so you can break them like an artist."
},
{
    name: "Eleanor Roosevelt",
    quote: "Do one thing every day that scares you."
},
{
    name: "Will Rogers",
    quote: "Even if you are on the right track, you'll get run over if you just sit there."
},
{
    name: "Winston ChurchHill",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
},
{
    name: "Tom Abbott",
    quote: "It's not just about being better. It's about being different. You need to give people a reason to choose your business."
},
{
    name: "Eric Hoffer",
    quote: "The leader has to be practical and a realist yet must talk the language of the visionary and the idealist."
},
];




newQuoteBtn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * quotesArray.length)
    // console.log(quotesArray[r].name + " = " + quotesArray[r].quote);

    quote.innerText = quotesArray[r].quote;
    author.innerText = quotesArray[r].name;
})
