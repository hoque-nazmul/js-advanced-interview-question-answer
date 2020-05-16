/***  Check Integer Number  ***/    
const isInt = num => {
    if (num % 1 === 0) {
        return true;
    }
    return false;
}
console.log(isInt(2));