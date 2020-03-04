let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array Slice. We can find out the smaller amount of array number from an parent array.. parent array is unchageable here.
const smallArr = numbers.slice(2, 5);
console.log(smallArr);
console.log(numbers);

// Array to String convertion and parent array is unchageable here.
const arrToString = numbers.join(', ');
console.log(arrToString);

// array splice is used to remove  elements from parent array..and parent array is changed here.
const studentId = [12, 43, 54, 65, 76, 23, 66];
const removed = studentId.splice(1, 2, 50);
console.log(removed);
console.log(studentId);
