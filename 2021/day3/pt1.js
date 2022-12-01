const input = require("./input");

let hash = {
  0: { 0: 0, 1: 0 },
  1: { 0: 0, 1: 0 },
  2: { 0: 0, 1: 0 },
  3: { 0: 0, 1: 0 },
  4: { 0: 0, 1: 0 },
  5: { 0: 0, 1: 0 },
  6: { 0: 0, 1: 0 },
  7: { 0: 0, 1: 0 },
  8: { 0: 0, 1: 0 },
  9: { 0: 0, 1: 0 },
  10: { 0: 0, 1: 0 },
  11: { 0: 0, 1: 0 },
};

let split_array = input.map((number) => {
  return number.split("");
});

let i = 0;

while (i < 12) {
  split_array.forEach((array) => {
    array[i] === "0" ? hash[i][0]++ : hash[i][1]++;
  });
  i++;
}

let gamma = "";
let epsilon = "";

for (const place in hash) {
  if (hash[place]["0"] > hash[place]["1"]) {
    gamma = gamma + 0;
    epsilon = epsilon + 1;
  } else {
    gamma = gamma + 1;
    epsilon = epsilon + 0;
  }
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
