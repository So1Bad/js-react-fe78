'use strict';

const var1 = 'true';
const var2 = false;
const var3 = 17;
const var4 = undefined;
const var5 = null;
console.log(`Var1 type: ${typeof var1}, Var2 type: ${typeof var2}, Var3 type: ${typeof var3}, Var4 type: ${typeof var4}, Var5 type: ${typeof var5}`);

let height = 15;
let width = 20;
let max;
if (height > width) {
   max = height;
} else {
   max = width;
}
console.log(`Max number: ${max}`);

for (let i = 1; i < 21; i++) {
   if (i % 3 === 0) {
      console.log(i);
   }
}

let key = true;
let documents = true;
let pen = true;
let apple = true;
let orange = false;
let shouldGoToWork;
if (key & documents & pen & (apple || orange)) {
   shouldGoToWork = true;
   console.log(`You can go to work`);
} else {
   shouldGoToWork = false;
   console.log("You forgot something");
}

const userNumber = prompt("Enter your number");
if (userNumber % 5 === 0 & userNumber % 3 === 0) {
   console.log("FizBuz");
} else if (userNumber % 5 === 0) {
   console.log("Fiz");
} else if (userNumber % 3 === 0) {
   console.log("Buz");
}

let userAge;
do {
   userAge = prompt("Enter your age");
   if (userAge > 0 & userAge < 121) {
      if (userAge >= 18) {
         console.log('Попей пивка');
      } else if (userAge >= 16 & userAge < 18) {
         console.log('Можешь выкурить сигаретку, только маме не говори');
      } else if (userAge < 16) {
         console.log('Пей колу');
      }
   } else {
      alert('Вы ввели некоректный возраст. Введите возраст еще раз');
   }
} while (userAge <= 0 || userAge > 120)


const userSide = prompt("Enter where you wanna trevel");
switch (userSide) {
   case 'юг':
      console.log('на юг пойдешь счастье найдешь');
      break;
   case 'север':
      console.log('на север пойдешь много денег найдешь');
      break;
   case 'запад':
      console.log('на запад пойдешь верного друга найдешь');
      break;
   case 'восток':
      console.log('на восток пойдешь разработчиком станешь');
      break;
   default:
      console.log('Вы ввели неверные данные, попробуйте еще раз');
}

const userName = prompt('Enter your name and surname');
const formatedName = userName.toLowerCase().split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
alert(`Hello, ${formatedName}`);

const userNumber1 = Number(prompt('Enter your number'));
const userSubtraction = Number(prompt('How much do you want to subtract?'));
const userAddition = Number(prompt('How much do you want to add?'));
const userMultiply = Number(prompt('By how much do you want to multiply your number?'));
const userDivision = Number(prompt('Into how many parts do you want to divide your number?'));
const userNumberFinal = ((userNumber1 - userSubtraction) + userAddition) * userMultiply / userDivision;
alert(`((((${userNumber1} - ${userSubtraction}) + ${userAddition}) * ${userMultiply}) / ${userDivision}) = ${userNumberFinal}`)

const ladderLength = Number(prompt('Enter ladder length'));
for (let i = 1; i <= ladderLength; i++) {
   console.log('#'.repeat(i));
}