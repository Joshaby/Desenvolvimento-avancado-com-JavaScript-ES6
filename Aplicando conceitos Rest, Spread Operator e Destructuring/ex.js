function sum(a, b) {
    console.log(arguments);
    var value = 0;
    for (var i = 0; i < arguments.length; i ++) {
        value += arguments[i];
    }
    return value;
}
console.log('1', sum(2, 2));

// Rest operator -> argumentos para Array(em chamamdas de funções)
const sum1 = (a, b, c, ...rest) => {
    console.log(arguments);
    console.log(a, b, c, ...rest);
    return a + b + c + rest.reduce((soma, value) => soma += value, 0);
}
console.log('2', sum1(1, 2, 3, 4, 5, 6, 7));

const sum2 = (...rest) => rest.reduce((soma, value) => soma += value, 0);
console.log('3', sum2(1, 2, 3, 4, 5, 6, 7));

const multiply = (...rest) => rest.reduce((acc, value) => acc *= value, 1);
console.log('4', multiply(1, 2, 3, 4, 5));

const sum3 = (...rest) => {
    return multiply.apply(undefined, rest);
}
console.log('5', sum3(1, 2, 3, 4, 5, 6, 7));

// Spread operator(Strings, Arrays, Objects, Iterable Objects) -> Array para argumentos(em chamada de funções)
const sum4 = (...rest) => {
    return multiply(...rest);
}
console.log('6', sum4(1, 2, 3, 4, 5, 6, 7));

const str = "Digital Innovation One";
function logArgs(...args) {
    console.log(args);
}
console.log('7')
logArgs(...str);

console.log('8')
logArgs(str);

const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
console.log('9', arr.concat(arr2));

const arr3 = [...arr, ...arr2];
console.log('10', arr3);

const obj = {
    test: 123
}
const obj1 = {
    ...obj,
    test2: 456
}
console.log('11', obj1);

// const arr4 = [...obj1];
// console.log('12', arr4);

const obj3 = {
    ...obj,
    test: 456
}
console.log('13', obj3);

