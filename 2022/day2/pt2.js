const { readFileSync } = require('fs');

const input = readFileSync('./input.txt', 'utf-8').split(/\r?\n/);
const matches = input.map(pair => pair.split(' '))

let score = 0;

matches.map(match => {
    /* lose */
    if (match[1] === 'X') {
        score += 0;
        switch (match[0]) {
            case 'A':
                score += 3;
                break;
            case 'B':
                score += 1;
                break;
            case 'C':
                score += 2;
                break;
        }
    }
    /* draw */
    else if (match[1] === 'Y') {
        score += 3;
        switch (match[0]) {
            case 'A':
                score += 1;
                break;
            case 'B':
                score += 2;
                break;
            case 'C':
                score += 3;
                break;
        }
    }
    /* win */
    else if (match[1] === 'Z') {
        score += 6;
        switch (match[0]) {
            case 'A':
                score += 2;
                break;
            case 'B':
                score += 3;
                break;
            case 'C':
                score += 1;
                break;
        }
    }
})

console.log(score);