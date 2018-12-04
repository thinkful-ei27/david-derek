'use strict';

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const arr = input.split(' ');

const reducedArr = arr.reduce((a, element) => {
  if (element.length === 3) {
    return a + ' ';
  }  else {
    return a + element[element.length - 1].toUpperCase();
  }
}, '');

console.log(reducedArr);