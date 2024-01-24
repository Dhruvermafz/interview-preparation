// //map
// Array.prototype.myMap = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }

//   return temp;
// };
// const nums = [1, 2, 3, 4];

// const multiply = nums.myMap((num, i, arr) => {
//   return num * 3 + i;
// });
// console.log(multiply);

// // filter

// // const nums = [1, 2, 3, 4, 5];

// // const moreThanTwo = nums.filter((num) => {
// //   return num > 2;
// // });

// // console.log(moreThanTwo);

// // const nums = [1, 2, 3, 4, 5];

// // const sumOfAll = nums.reduce((acc, curr, i, arr) => {
// //   return acc + curr;
// // }, 0);

// // console.log(sumOfAll);

var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  substract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10);

console.log(result);
