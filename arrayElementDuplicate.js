const arr = [1, 2, 3, 4, 5, 6];

// One Possible Solution
console.log(arr.concat(arr));

// Another Possible Solution
console.log([...arr, ...arr]);