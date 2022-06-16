// Alina
// const number = process.env.NUMBER;
// console.log(process.env.NUMBER); 

//export NUMBER=33 && node class_work.js

//Task 1
const number = +process.argv[2];
if (!number || Number.isNaN(number)) {
    console.log('This is not a number.')
} else {
    numberMinusOne = number - 1;
    numberPlusOne = number + 1;
    console.log(`Следующее за числом ${number} - ${numberPlusOne}.\nДля числа ${number} предыдущее число - ${numberMinusOne}.`)
}

//Task 2
const num = +process.argv[2];
if (!number || Number.isNaN(number)) {
    console.log('This is not a number.')
} else {
    const result = 17 * (num ** 2) - (6 * num) + 13;
    console.log('Результат:', result);
}

//Task 3
const tanyaAge = Math.round(+process.argv[2]);
const mityaAge = Math.round(+process.argv[3]);

if (!tanyaAge || Number.isNaN(tanyaAge) || !mityaAge || Number.isNaN(mityaAge)) {
    console.log('This is not a number.');
} else if (tanyaAge <= 0 || tanyaAge > 100 || mityaAge <= 0 || mityaAge > 100) {
    console.log('This is the wrong age.');
} else {
    const averageGuy = Math.round((tanyaAge + mityaAge) / 2);
    let differFromAverageTanyaAge = averageGuy - tanyaAge;
    console.log('1. ', differFromAverageTanyaAge);
    let differFromMityaAverageAge = averageGuy - mityaAge;
    console.log('2. ', differFromMityaAverageAge);
    if (differFromAverageTanyaAge < 0) {
        differFromAverageTanyaAge =  -1 * differFromAverageTanyaAge;
    } 
    if (differFromMityaAverageAge < 0) {
        differFromMityaAverageAge = -1 * differFromMityaAverageAge;
    }

    console.log(`Средний возраст детей - ${averageGuy} лет.\nРазница Тани от среднего возраста - ${differFromAverageTanyaAge} лет.\nРазница Мити от среднего возраста - ${differFromMityaAverageAge} лет.`);
}

//Task 4
const numberOfApartment = +process.argv[2];
const amountOfApartments = 15;
const amountOfApartmentsOnFloor = 3;
const apartments = [];

for (let i = 1; i <= amountOfApartments; i++) {
    apartments.push(i);
}

for (let visitedApartment = 1, visitedApartmentsOnFloor = 0, floor = 1; visitedApartment <= amountOfApartments; visitedApartment++, visitedApartmentsOnFloor++) {
    if (visitedApartmentsOnFloor === amountOfApartmentsOnFloor) {
        visitedApartmentsOnFloor = 0;
        floor++;
    }
    if (visitedApartment === numberOfApartment) {
        console.log(`This is apartment ${numberOfApartment} on a ${floor} floor.`);
    }
}

//Task 5
let result;
let x = 100;

while (result !== 564) {
    let firstNumber = Number(x.toString().charAt(0));
    let secondPartOfNumber = Number(x.toString().slice(1));

    result = secondPartOfNumber * 10 + firstNumber;
    x++
}
console.log('x', x);

//Task 6

//Task 7
const countingOfAge = function(yearOfBirth, monthOfBirth) {
    const dateInfo = new Date();
    const yearNow = dateInfo.getFullYear();
    const monthNow = dateInfo.getMonth() + 1;
    if (monthNow < monthOfBirth) {
        return console.log('Differ in years is: ', yearNow - yearOfBirth,'.', '\nDiffer in months is: ', monthOfBirth - monthNow, '.');
    }
    return console.log('Differ in years is: ', yearNow - yearOfBirth, '\nDiffer in months is: ', monthNow - monthOfBirth, '.');
}
countingOfAge(2011, 9);

//Task 9
let arrOfNumbers = []
let sumOfRepeat = 9;


for (let i = 1; i <= 9; i++) {
    arrOfNumbers.push(i);
}

for (i = 1, j = 1; j < 10; j++) {

    if (i === 10) break;

    if (j === 1) {
        console.log(`\nТаблица на ${i}\n`);
    }
    console.log(i, '*', j, '=', i * j);

    if (j === 9) {
        i++;
        j = 0;
    }

}