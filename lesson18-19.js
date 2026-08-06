'use strict';
function getSum(x) {
   let sum = 0;
   for (let i = 0; i <= x; i++) {
      sum += i;
   }
   return sum;
}
console.log(getSum(100));

function calcCredit(totalAmount) {
   const rate = 0.17;
   const years = 5;
   const totalMounth = years * 12;
   let totalPayout = 0;
   let curentAmount = totalAmount;
   for (let i = 1; i <= totalMounth; i++) {
      totalPayout += (totalAmount / totalMounth) + ((curentAmount * rate) / 12);
      curentAmount -= (totalAmount / totalMounth);
   }
   const overpayment = totalPayout - totalAmount;
   return overpayment;
}
console.log(calcCredit(9000));

function trimString(str, start, end) {
   let result = '';
   for (let i = start; i <= end; i++) {
      result += str[i];
   }
   return result;
}
console.log(trimString('Привет ывфвфывфыв ыфвдо!', 3, 10));

function getSumNumbers(number) {
   const digits = String(number).split('').map(Number);
   let sum = 0;
   for (let num in digits) {
      sum += digits[num];
   }
   return sum;
}
console.log(getSumNumbers(2021));

function getSum2(a, b) {
   let sum = 0;
   if (a === b) {
      return a;
   } else if (a > b) {
      for (let i = b; i <= a; i++) {
         sum += i;
      }
      return sum;
   } else {
      for (let i = a; i <= b; i++) {
         sum += i;
      }
      return sum;
   }
}
console.log(getSum2(-2, 5));

function foo() {
   console.log("foo");
}
function boo() {
   console.log("boo");
}
function fooBoo(boolean, foo, boo) {
   if (boolean) {
      foo();
   } else {
      boo();
   }
}
fooBoo(false, foo, boo);

function isTriangle(a, b, c) {
   return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(4, 3, 2));

function breakChocolate(n, m) {
   if (n <= 0 || m <= 0) {
      return 0;
   } else {
      return n * m - 1;
   }
}
console.log(breakChocolate(4, 3));

const taxRate = 0.20;
const phonePrice = 120;
const accessoryPrice = 9;
let bankBalance = Number(prompt("Введите ваш банковский баланс ($):")) || 0;
let totalPrice = 0;
let phoneCount = 0
function calculateTax(totalPrice) {
   return totalPrice * taxRate;
}
function formatPrice(totalPrice) {
   return totalPrice.toFixed(2) + '$';
}
while (totalPrice + phonePrice + accessoryPrice <= bankBalance) {
   totalPrice += phonePrice + accessoryPrice;
   phoneCount += 1;
}
const totalWithTax = totalPrice + calculateTax(totalPrice);
console.log(`Количество ваших товаров: ${phoneCount}, на общую сумму: ${formatPrice(totalPrice)}`);
console.log(`Сумма покупки с учетом налога: ${formatPrice(totalWithTax)}`);
if (totalWithTax <= bankBalance) {
   console.log("Вы можете это купить");
} else {
   console.log('У вас не достаточно средств!');
}


//LESSON 19
const developer1 = {
   firstName: 'Maria',
   lastName: 'Y.',
}
delete developer1.firstName;
delete developer1.lastName;

const developer2 = {
   firstName: 'Victoria',
   lastName: 'T.',
   country: 'Puerto Rico',
}
console.log('lastName' in developer2);
console.log(developer2.hasOwnProperty('firstName'));

const student = {
   name: 'John',
   age: 19,
   isHappy: true,
}
for (let key in student) {
   console.log(`Ключ: ${key}, имеет значение: ${student[key]}`);
}

const colors = {
   'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
   },
}
console.log(colors['ru pum pu ru rum'].red, `\n${colors['ru pum pu ru rum'].blue}`);

let salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   igor: 664,
   alexandra: 199
}
let totalSalaries = 0;
let keyCounter = 0;
for (let person in salaries) {
   totalSalaries += Number(salaries[person]);
   keyCounter += 1;
}
const averageSalary = totalSalaries / keyCounter;
console.log(averageSalary);

const userLogin = prompt("Придумайте логин:");
const userPassword = prompt("Придумайте пароль:");
const user = {
   login: userLogin,
   password: userPassword,
};
const confirmLogin = prompt("Введите логин для входа:");
const confirmPassword = prompt("Введите пароль для входа:");
if (confirmLogin === user.login && confirmPassword === user.password) {
   alert("Добро пожаловать!");
} else {
   alert("Неверный логин или пароль!");
}

const numberToWords = {
   0: 'ноль',
   1: 'один',
   2: 'два',
   3: 'три',
   4: 'четыре',
   5: 'пять',
   6: 'шесть',
   7: 'семь',
   8: 'восемь',
   9: 'девять',
};
const scoreString = '2:8';
const scoreNum = scoreString.split(':').map(Number);
const scoreWord1 = numberToWords[scoreNum[0]];
const scoreWord2 = numberToWords[scoreNum[1]];
console.log(`Футбольный матч между командами А и Б закончился со счетом: ${scoreWord1}-${scoreWord2}`);

let student1 = {
   name: 'Polina',
   age: 27,
}
let student2 = {
   name: 'Polina',
   age: 27,
}
let studentEqual = false;
if (Object.keys(student1).length === Object.keys(student2).length) {
   for (let key in student1) {
      if (student1[key] === student2[key]) {
         studentEqual = true;
      } else {
         studentEqual = false;
         break;
      }
   }
}
if (studentEqual) {
   console.log('Объекты равны')
} else {
   console.log('Объекты не равны')
}

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
console.log(animals.bird?.name);