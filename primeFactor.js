function getPrimeFactor (num) {
    let divisor = 2;
    const factor = [];
    
    while (num > 2) {
        if (num % divisor === 0) {
            factor.push(divisor);
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return factor;
}
console.log(getPrimeFactor(65));