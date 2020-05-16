function counter () {
    let _counter = 0;
    return function (_increament) {
        _counter = _counter + _increament;
        return _counter;
    }
}
const add = counter();
add(4);
add(6)
console.log(add(4));
console.log(add(6));
console.log(add(6));