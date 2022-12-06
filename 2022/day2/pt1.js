const { readFileSync } = require('fs');

const input = readFileSync('./input.txt', 'utf-8').split(/\r?\n/);
const matches = input.map(pair => pair.split(' '))

let score = 0;

matches.map(match => {
    /* play rock */
    if (match[1] === 'X') {
        score += 1;
        switch (match[0]) {
            case 'A':
                score += 3;
                break;
            case 'B':
                score += 0;
                break;
            case 'C':
                score += 6;
                break;
        }
    }
    /* play paper */
    else if (match[1] === 'Y') {
        score += 2;
        switch (match[0]) {
            case 'A':
                score += 6;
                break;
            case 'B':
                score += 3;
                break;
            case 'C':
                score += 0;
                break;
        }
    }
    /* play scissors */
    else if (match[1] === 'Z') {
        score += 3;
        switch (match[0]) {
            case 'A':
                score += 0;
                break;
            case 'B':
                score += 6;
                break;
            case 'C':
                score += 3;
                break;
        }
    }
})

console.log(score);