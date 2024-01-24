//input = [2, 3, 4]
// cost = [3, 4, 3]

//outut = -1

// Explaination: You can't start at station 0, 1, as there is not enough gas to travel to the next station
// let's start at station 2 and fill up with 4 unit of gas
// Your tank: 0 + 4
//Travel to station 0: Your tank: 4-3+2
//Travel to station 1: Your tank: 3-3+3
//You cannot travel back to station 2, as it requires 4 unit of gas but only have 3
//
const gas = [2, 3, 4];
const cost = [3, 4, 3];

const canCompleteCircuit = function (gas, cost) {
  let diff = 0;
  let total = 0;
  let start = 0;
  let current = 0;

  for (var i = 0; i < gas.length; i++) {
    diff = gas[i] - cost[i];

    total += diff;
    current += diff;

    if (current < 0) {
      start = i + 1;

      current = 0;
    }
  }
  if (total >= 0) {
    return start;
  }
  return -1;
};

console.log(canCompleteCircuit());
