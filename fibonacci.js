// implementing with loop
function fibonacci (num) {
    const fibonacci = [0, 1]
    if (num <= 2) {
        return 1;
    }
    for (let i = 2; i <= num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci[num]
}
console.log(fibonacci(10));
// expected output: 55


// implementing with recursive
function getFibonacci(num) {
    if (num <= 2) {
        return 1;
    }
    return getFibonacci(num-1) + getFibonacci(num-2);
}
console.log(getFibonacci(12));
// expected output: 144