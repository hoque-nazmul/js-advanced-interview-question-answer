(function () {
    var a = b = 5;
})();

console.log(b);
// b = 5 
// a is not defined..

var output = (function (x) {
    delete x;
    return x;
})(0);

console.log(output);
// output: 0

console.log(0.1 + 0.2 === 0.3);
// output: false;