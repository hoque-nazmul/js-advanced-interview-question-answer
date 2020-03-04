function add (a, b) {
    const numbers = [...arguments];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const result = add (2, 5, 10, 23);

console.log(result);