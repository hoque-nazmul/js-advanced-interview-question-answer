const flattArray = arr => {
    const result = [];
    arr.forEach(el => {
        if (Array.isArray(el)) {
            result.push(...flattArray(el));
        } else {
            result.push(el);
        }
    });
    return result;
}
console.log(flattArray([32, 53, [545, 54, [343, [434, 32]]]]));
// expected output: [32, 53, 545, 54, 343, 434, 32]
