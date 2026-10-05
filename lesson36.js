"use strict";
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    },
    {
        name: "Test 1",
        phone: "(09) 999 93 82",
        email: "sadasdasd@gmail.com",
        cars: ["bmw"],
        animals: ["dog", "cat"],
        hasChildren: true,
        hasEducation: false
    },
    {
        name: "Test 2",
        phone: "(09) 999 93 59",
        email: "fsfsfasdas@gmail.com",
        cars: ["audi", "porsche"],
        animals: [],
        hasChildren: true,
        hasEducation: true
    }
];
function stringUserNames(items, key) {
    return items.map((item) => item[key]).join(',');
}
const userNames = stringUserNames(users, 'name');
console.log(userNames);
function sumUserCars(items, key) {
    return items.reduce((acc, item) => acc + (item[key]?.length || 0), 0);
}
const totalCars = sumUserCars(users, 'cars');
console.log(totalCars);
function filterUsersByEducation(items, key) {
    return items.filter((item) => !!item[key]);
}
const educatedUsers = filterUsersByEducation(users, 'hasEducation');
console.log(educatedUsers);
function filterUserAnimals(items) {
    return items.filter((item) => !!item.animals && !!item.animals.length);
}
const usersWithAnimals = filterUserAnimals(users);
console.log(usersWithAnimals);
function getCarNames(items, key) {
    return items.map((item) => item[key] ?? []).flat().join(', ');
}
const carNames = getCarNames(users, 'cars');
console.log(carNames);
