const arr = [32, 43, 54, 32, 43, 2, 3]

function removeDuplicateElement (nums) {
    const uniqueElement = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (uniqueElement.indexOf(element) === -1) {
            uniqueElement.push(element);
        }
    }
    return uniqueElement;
}

console.log(removeDuplicateElement(arr));
// expected output: [ 32, 43, 54, 2, 3 ]