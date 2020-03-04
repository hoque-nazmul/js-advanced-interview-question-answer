let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, 3, -5];

for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];

    if(element > 5) {
        break;
    }
    console.log(element);
}

for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];

    if(element < 0) {
        continue;
    }
    // console.log(element);
}