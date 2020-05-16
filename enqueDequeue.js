/*** Implement enqueue and dequeue using only two stacks ***/
const inputStack = [];
const outputStack = [];

const enqueue = element => {
    return inputStack.push(element);
}

const dequeue = (input, output) => {
    if (output.length <= 0) {
        while (input.length > 0) {
            const ele = input.pop();
            output.push(ele);
        }
    }
    return input.pop();
}
console.log(enqueue(32));
console.log(enqueue(22));
console.log(inputStack);

console.log(dequeue(inputStack, outputStack));
console.log(inputStack);
