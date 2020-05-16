/***  Write a "mul" function which output like - console.log(mul(2)(3)(4));  ***/
const multify = (_a) => {
    return function (_b) {
        return function (_c) {
            return _a * _b * _c;
        }
    }
}

const mul = multify(2)(3)(4);
console.log(mul);