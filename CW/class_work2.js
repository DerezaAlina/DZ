const loginCount = [1, 6, 7, 8, 9];
const newArray = loginCount.map((element, index) => {
    const newValue = element * 2;
    console.log(index);
    return newValue;
});
console.log(loginCount)

loginCount.forEach((element, index, arr) => {
    console.log('Current element is:', element);
    console.log('Check', arr[index]);
}); 

const names = ['Sasha', 'Sveta', 'Maksim']
const filterNames = names.filter((element) => element.startsWith('S'));
console.log(filterNames);

const myArr = [4, 8, 15, 19, 240]
const result = myArr.reduce((accum, element) => {
    console.log('accum', accum);
    console.log('accum', accum, '+', 'element', element);
    return accum + element;
}, 0)

console.log(myArr.sort());

console.log(myArr.sort((next, current) => current - next));