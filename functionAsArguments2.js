function filter(arr, fn) {
    newArray = [];
    for (let i = 0; i < arr.length; i++) {
       if (fn(arr[i])) {
            newArray.push(arr[i]);
       } 
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINE
const filterNamesOneLine = filter(myNames, (name) => name[0] === 'R');
console.log(filterNamesOneLine);