// ==== Uses of Undefined

let name;
console.log(name); //Output: undefined

function add (a, b) {
    console.log(a + b);
}
console.log(add(12, 25)); //Output: 27 undefined   =>because doesn't return the output in this function

let person = {name : "Anayet", age : 22}
console.log(person.address); //Output: undefined    => because address property doesn't exist in that object.

let nums = [32, 43, 54]
console.log(nums[12]); //Output: undefined          => because nums[12] array keys doesn't exist in that array.

let name = undefined; //Output: undefined 

// Uses of Null
// if a varieble doesn't have any values, we can set null as a value of that varieble.

let name = null;

if(name = null) {
    console.log(`Name is null`);
}
else {
    console.log(`Name is not null.`);
}
