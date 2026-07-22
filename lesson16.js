'use strict';
let x = 20
let y = 58
let z = 42
console.log(`Total = ${x + y + z}`);

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;
const myAgeInYears = 24;
const myAgeInSeconds = myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
console.log(`My age in seconds: ${myAgeInSeconds}`);

let count = 42
let userName = '42'
const countString1 = String(count);
const countString2 = count.toString();
console.log(typeof countString2);
let userNameNumber = Number(userName);
userNameNumber = +userName;

let a = 1
let b = 2
let c = 'белых медведей'
console.log(String(a) + String(b) + " " + c);

const word1 = 'доступ';
const word2 = 'морпех';
const word3 = 'наледь';
const word4 = 'попрек';
const word5 = 'рубило';
const lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
console.log(`Words length: ${lengthWords}`);

const number1 = 100;
const string1 = "test";
const boolean1 = true;
console.log(`Variable: number1 have type: ${typeof number1}`);
console.log(`Variable: string1 have type: ${typeof string1}`);
console.log(`Variable: boolean1 have type: ${typeof boolean1}`);

let userNamePrompt = prompt('What is your name?');
let userAgePrompt = prompt('What is your age?');
console.log(`Your name is ${userNamePrompt}, you are ${userAgePrompt} years old`);

let a1 = 4;
let b1 = 3;
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log(a1, b1);

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);