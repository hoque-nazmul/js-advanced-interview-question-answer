for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
// expected output:
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// varieble with var saves in global context, after completing for looping the value of var i is 10 then setTimeout print the value of var i in 10 times.
// for is synchronus programming and setTimeout() is asynchronus programming

// we can solve that problem by using let
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}