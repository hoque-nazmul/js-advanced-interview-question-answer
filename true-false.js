/*
==== Folsy: ====

=> '';
=>  0;
=> false;
=> NaN;
=> undefined
=> null

==== Truthy: ====

=> ' ';
=>  '0';
=> 'false';
=> [];
=> {}; 
=> true

*/

const num = 23;

if (num == 0 || num) {
    console.log("This is true.");
}
else {
    console.log("This is false.");
}