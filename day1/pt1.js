const input = require("./input");

let increaseCount = 0;

input.forEach((number, idx) => {
  if (number > input[idx - 1]) {
    increaseCount++;
  }
});

console.log(increaseCount);
