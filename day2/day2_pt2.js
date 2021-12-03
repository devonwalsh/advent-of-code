const input = require("./day2_input");

const split_input = input.map((item) => {
  return item.split(" ");
});

let horizontal = 0;
let depth = 0;
let aim = 0;

split_input.forEach((direction) => {
  if (direction[0] === "forward") {
    horizontal += parseInt(direction[1]);
    depth += aim * direction[1];
  } else if (direction[0] === "down") {
    aim += parseInt(direction[1]);
  } else if (direction[0] === "up") {
    aim -= parseInt(direction[1]);
  }
});

console.log(horizontal * depth);
