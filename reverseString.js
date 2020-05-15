function reverseString(string) {
    return string.split('').reverse().join('');
}
console.log(reverseString('Hello World'));
// expected output: dlroW olleH

// another possible solution
function reverseStr (str) {
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        reversedStr = char + reversedStr;
    }
    return reversedStr;
}
console.log(reverseStr("Hey, JavaScript"));
// expected output: tpircSavaJ ,yeH