const { readFileSync } = require('fs');
const priorityDict = require('./priorities');

const input = readFileSync('./input.txt', 'utf-8').split(/\r?\n/);
const priorityArray = [];

input.map(rucksack => {
    const length = rucksack.length
    const characters = rucksack.split('')
    const half1 = characters.slice(0, length/2)
    const half2 = characters.slice(length/2, length)

    for (let i = 0; i < half1.length; i++) {
        let match = half2.find(letter => letter === half1[i])
        
        if (match) {
            const priorityValue = priorityDict[match]
            priorityArray.push(priorityValue)
            break;
        }
    }

})

const priorityTotal = priorityArray.reduce((runningTotal, value) => runningTotal += value)

console.log(priorityTotal)