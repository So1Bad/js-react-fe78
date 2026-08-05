'use strict';

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

const numbers1 = [5, 43, 63, 23, 90];
const numbers2 = [5, 43, 63, 23, 90];
numbers1.splice(0, numbers1.length);
const numberLength = numbers2.length;
for (let i = 0; i < numberLength; i++) {
   numbers2.pop();
}
console.log(numbers2);
console.log(numbers1);

const students = ['Polina', 'Dasha', 'Masha']
students.pop();
students.push('Borya');
// students.splice(students.length - 1, 1, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);

const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i < cats.length; i++) {
   console.log(cats[i]);
}
for (const cat of cats) {
   console.log(cat);
}

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const numbers = evenNumbers.concat(oddNumbers);
console.log(numbers);
console.log(numbers.indexOf(8));

const binary = [0, 0, 0, 0]
const binaryStr = binary.join(1);
console.log(binaryStr);

const someTxt = 'Топот';
function isPalindrome(word) {
   const txtArr = word.toLowerCase().split('');
   txtArr.reverse();
   const someTxtRev = txtArr.join("");
   console.log(someTxtRev);
   if (word.toLowerCase() === someTxtRev) {
      console.log(`Слово ${word} является палиндромом`)
   } else {
      console.log(`Слово ${word} не является палиндромом`)
   }
}
isPalindrome(someTxt);

const matrix = [
   [12, 98, 78, 65, 23],
   [54, 76, 98, 43, 65],
   [13, 324, 65, 312],
   [9092, 22, 45, 90000],
]
let totalSum = 0;
let totalCount = 0;
for (const row of matrix) {
   for (const num of row) {
      totalSum += num;
      totalCount++;
   }
}
const avg = totalSum / totalCount;
console.log(avg);

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const positiveNumbers = [];
const negativeNumbers = [];
for (let i = 0; i < mixedNumbers.length; i++) {
   if (mixedNumbers[i] >= 0) {
      positiveNumbers.push(mixedNumbers[i]);
   } else {
      negativeNumbers.push(mixedNumbers[i]);
   }
}
console.log(positiveNumbers);
console.log(negativeNumbers);

const originalArr = [
   Math.floor(Math.random() * (1001 - (-1000)) + (-1000)),
   Math.floor(Math.random() * (1001 - (-1000)) + (-1000)),
   Math.floor(Math.random() * (1001 - (-1000)) + (-1000)),
   Math.floor(Math.random() * (1001 - (-1000)) + (-1000)),
   Math.floor(Math.random() * (1001 - (-1000)) + (-1000))];
const newArr = [];
for (const num of originalArr) {
   // newArr.push(Math.pow(num, 3));
   newArr.push(num * num * num);
}
console.log(originalArr);
console.log(newArr);