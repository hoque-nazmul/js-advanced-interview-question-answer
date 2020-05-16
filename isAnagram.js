const firstWord = "Mary";
const secondWord = "Army"; 

const isAnagram = (first, second) => {
    let x = first.toLowerCase();
    let y = second.toLowerCase();

    x = x.split('').sort().join('');
    y = y.split('').sort().join('');

    return x === y;
}

console.log(isAnagram(firstWord, secondWord));
