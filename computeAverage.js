'use strict';

function average(numbers) {

    let counter = 0;
    let sum = 0;
    numbers.forEach(function(number) {
        sum += number;
        counter++;
    }
    )
    return sum / counter;
}
console.log(average([2,5,8]));