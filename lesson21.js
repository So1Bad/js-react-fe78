const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(num => console.log(num));
function logNumber(num) { console.log(num) };
fibonacci.forEach(logNumber);

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const userList1 = users.map((name, index) => `member ${index + 1}: ${name}`);
const userList2 = users.map(function (name, index) {
   return `member ${index + 1}: ${name}`;
});
console.log(userList1)
console.log(userList2)

const numbers = [7, -4, 32, -90, 54, 32, -21, 123, 15, -2, 0, -18, 92, -145]
const positiveNumbers1 = numbers.filter((num) => num >= 0);
const positiveNumbers2 = numbers.filter(function (num) { return num >= 0 });
console.log(positiveNumbers1);
console.log(positiveNumbers2);

const fibonacciRes1 = fibonacci.reduce((acc, num) => acc + num, 0);
const fibonacciRes2 = fibonacci.reduce(function (acc, num) { return acc + num }, 0);
console.log(fibonacciRes1);
console.log(fibonacciRes2);

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const firstNegative1 = numbers2.find((num) => num % 2 === 0);
const firstNegative2 = numbers2.find(function (num) { return num % 2 === 0 });
console.log(firstNegative1);
console.log(firstNegative2);

function Student(name, rate, salary) {
   this.name = name;
   this.rate = rate;
   this.salary = salary;
   this.calcCredit = function () {
      if (this.rate === 'A') { return 12 * this.salary }
      else if (this.rate === 'B') { return 9 * this.salary }
      else if (this.rate === 'C') { return 6 * this.salary }
      else {
         console.log(`У ${this.name} плохой рейтинг, ему мы не можем дать кредит`)
         return 0;
      }
   }
}
const student1 = new Student('Андрей', 'A', 1500)
const student2 = new Student('Карина', 'B', 800)
const student3 = new Student('Анастасия', 'A', 600)
const student4 = new Student('Алексей', 'D', 1200)
const student5 = new Student('Татьяна', 'C', 900)
const students = [];
students.push(student1, student2, student3, student4, student5);
console.log(students);
const totalCredit = students.reduce((acc, credit, index) => {
   credit = students[index].calcCredit();
   return acc + credit;
}, 0);
console.log(`Общая сумма кредитов которую можно выдать группе: ${totalCredit}`);

const changedStr = str => str.split('').filter((char) => char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' && char !== 'A' && char !== 'E' && char !== 'I' && char !== 'O' && char !== 'U').join('');
console.log(changedStr("This website is for losers LOL!"));

const accum = str => str.split('').reduce((acc, char, index) => {
   const letter = char.toUpperCase() + char.toLowerCase().repeat(index);
   if (index === 0) {
      return acc + letter;
   } else {
      return acc + '-' + letter;
   }
}, '')
console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));

const highAndLow = num => {
   const arr = num.split(' ').map(Number);
   return `${arr.reduce((acc, num) => Math.max(acc, num))} ${arr.reduce((acc, num) => Math.min(acc, num))}`
}
console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));

const isIsogram = str => {
   const strArr = str.toLowerCase().split('');
   return strArr.every((char, index) => strArr.indexOf(char) === index);
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("qwerTYUIoP[}AsDfGhkl;zXCMVnB,"));

const countCharCode = str => {
   const total1 = str.split('').map(((char) => char.charCodeAt())).join('').split('').map(Number);
   const total2 = total1.map(num => {
      if (num === 7) {
         return 1;
      } else { return num; }
   });
   return total1.reduce((acc, num) => acc + num, 0) - total2.reduce((acc, num) => acc + num, 0);
}
console.log(countCharCode('ACD'));
console.log(countCharCode('asdCXSyuortyC'));

const duplicatedBracket = str => {
   const strArr = str.toLowerCase();
   return strArr.map((char) => {
      if (strArr.indexOf(char) === strArr.lastIndexOf(char)) {
         return '('
      } else {
         return ')'
      }
   }).join('');
}
console.log(duplicatedBracket('din'));
console.log(duplicatedBracket("recede"));
console.log(duplicatedBracket('Success'));
console.log(duplicatedBracket('(( @'));