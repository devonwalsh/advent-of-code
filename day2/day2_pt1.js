const input = require("./day2_input");

const split_input = input.map((item) => {
  return item.split(" ");
});

let horizontal = 0;
let depth = 0;

split_input.forEach((direction) => {
  switch (direction[0]) {
    case "forward":
      horizontal += parseInt(direction[1]);
      break;
    case "down":
      depth += parseInt(direction[1]);
      break;
    case "up":
      depth -= parseInt(direction[1]);
      break;
  }
});

console.log(horizontal * depth);
