function changeCase (str) {
    const arr = [];
    str.split('').map(char => {
        if (char.toUpperCase() === char) {
            arr.push(char.toLowerCase());
        } else {
            arr.push(char.toUpperCase());
        }
    });
    return arr.join('');
}
console.log(changeCase("hEllo WoRlD"));
// expected output: HeLLO wOrLd

// another possible solution
function caseCannge(string) {
    let changedCase = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char.toLowerCase() === char) {
            changedCase = changedCase + char.toUpperCase();
        } else {
            changedCase = changedCase + char.toLowerCase();
        }
    }
    return changedCase;
}
const str = "HEy, JAvaSCripT";
console.log(caseCannge(str));
// expected outpu: heY, jaVAscRIPt