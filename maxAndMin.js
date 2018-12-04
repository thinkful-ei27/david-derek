'use strict';

function max(numbers) {
  let i = 0;
  let maxNum = undefined;
  while (i < numbers.length) {
    if (maxNum === undefined) {
      maxNum = numbers[i];
    } else if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
    i++;
  }
  return maxNum;
}

function min(numbers) {
  let i = 0;
  let minNum = undefined;
  while (i < numbers.length) {
    if (minNum === undefined) {
      minNum = numbers[i];
    } else if (minNum > numbers[i]) {
      minNum = numbers[i];
    }
    i++;
  }
  return minNum;
}

console.log(max([5, 7, 123, 34, 42]));

console.log(min([5, 8, 1, 3566, 42]));