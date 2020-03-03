const numbers = [2, 3, 4, 5, 6, 7, 8]

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const square = element * element;
//     output.push(square);
// }
// console.log(output);

// map return an array, filter return an array but find return only a value 

// uses of map
const square = numbers.map(num => num * num);
console.log(square);

const double = numbers.map(function doubleIt(x) {
    return x * 2;
});
console.log(double);

// uses of filter
const filterIt = numbers.filter(num => num > 5);
console.log(filterIt);

// uses of find
const findIt = numbers.find(num => num > 5);
console.log(findIt);