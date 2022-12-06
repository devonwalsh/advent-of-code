const { readFileSync } = require('fs');
const priorityDict = require('./priorities');

const input = readFileSync('./input.txt', 'utf-8').split(/\r?\n/);
const chunkedArray = [];
const priorityArray = [];

/* split array into sets of 3 */
for (let i = 0; i < input.length; i += 3) {
    const chunk = input.slice(i, i+3)
    chunkedArray.push(chunk)
}

chunkedArray.map(set => {

    const pack1 = set[0].split('')
    const pack2 = set[1].split('')
    const pack3 = set[2].split('')

    for (let i = 0; i < pack1.length; i++) {
        let match1 = pack2.find(letter => letter === pack1[i])
        let match2 = pack3.find(letter => letter === pack1[i])
        
        if (match1 && match2) {
            const priorityValue = priorityDict[pack1[i]]
            priorityArray.push(priorityValue)
            break;
        }
    }

})

const priorityTotal = priorityArray.reduce((runningTotal, value) => runningTotal += value)

console.log(priorityTotal)