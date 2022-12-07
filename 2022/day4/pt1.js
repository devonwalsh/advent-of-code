const { readFileSync } = require('fs');

const input = readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

const splitArray = [];
let count = 0;

/* Split lines into two arrays */
input.map(line => {
    const splitLine = line.split(',');
    splitArray.push(splitLine);
});

/* Split pairs into arrays of numbers */
splitArray.map(set => {
    set.map((pair, idx) => {
        const splitPair = pair.split('-');
        set[idx] = splitPair;
    });
});

/* Convert strings to ints */
splitArray.map(set => {
    set.map(pair => {
        pair.map((num, idx) => {
            pair[idx] = parseInt(num)
        })
    })
})

/* Count instances of sets containing each other */
splitArray.map(set => {
    if (set[0][0] >= set[1][0] && set[0][1] <= set[1][1]) {
        count++;
    }
    else if (set[1][0] >= set[0][0] && set[1][1] <= set[0][1]) {
        count++;
    }
});

console.log(count)