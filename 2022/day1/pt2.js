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

const topThree = newArray.sort().reverse().slice(0, 3)

const topThreeTotal = topThree.reduce((runningTotal, value) => runningTotal + value)

console.log(topThreeTotal)