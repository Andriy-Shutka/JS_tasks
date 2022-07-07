"use strict";

alert('Are you sure that want to go out?');
const result = confirm('Yep or not?');
console.log(result);
const answer = +prompt('How many old are you?');
console.log(typeof(answer));
console.log(answer);
const answer1 = [];
answer1[0] = prompt ('What is your name?', '');
answer1[1] = prompt('How many years are you?', '');
answer1[2] = prompt ('What is yoyr surname?');
console.log(answer1[2]);

document.write(answer1);