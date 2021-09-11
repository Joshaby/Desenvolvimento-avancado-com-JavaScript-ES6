var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
// Destructuring Assignment
var [apple1, banana1, orange1, [tomato1]] = arr;
console.log('1', apple, apple1);
console.log(tomato, tomato1);

var obj = {
    name: 'José',
    lastName: 'Henrique'
}
var {name, lastName} = obj
console.log('2', name, lastName);

var [...rest] = arr;
console.log('3', ...rest.flat(1));

var obj = {
    name: 'José',
    lastName: 'Henrique',
    props: {
        age: 20,
        color: ['Yellow', 'Blue', 'Red', 'Purple']
    }
}
var {props: {age: age2, color: [yellow, blue, red, purple]}} = obj;
console.log('4', age2, yellow, blue, red, purple);

var arr = [{name: 'Apple', type: {test: 123, test1: 'fruit'}}, {name: 'Banana', type: 'fruit'}]
var [{name: name1, type: {test, test1}}] = arr;
console.log('5', name1, test, test1);

function sum([a, b] = [0, 0]) {
    return a + b;
}
console.log('6', sum([5, 6]));
console.log(sum());

function sum1({a, b}) {
    return a + b;
}
console.log('7', sum1({a: 5, b: 6}));