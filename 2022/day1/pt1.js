const { readFileSync } = require('fs');

const input = readFileSync('./input.txt', 'utf-8').split(/\r?\n/);
const newArray = [];
let runningTotal = 0;

input.map(calories => {
    if (calories === '') {
        newArray.push(runningTotal)
        runningTotal = 0
    }
    else {
        runningTotal += parseInt(calories)
    }
})

const mostCalories = newArray.sort().reverse()[0]

console.log(mostCalories)