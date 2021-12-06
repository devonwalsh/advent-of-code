const input = require("./day1_input");

let increaseCount = 0;

input.forEach((number, idx) => {
  if (input[idx - 2] && input[idx - 1] && input[idx + 1]) {
    if (
      input[idx - 1] + input[idx] + input[idx + 1] >
      input[idx - 2] + input[idx - 1] + input[idx]
    ) {
      increaseCount++;
    }
  }
});

console.log(increaseCount);
