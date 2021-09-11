// Generators
console.log('1');
function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function');
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('2');
function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it1 = hello();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next('Test'));

console.log('3');
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number ++;
    }
}

const it2 = naturalNumbers();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

console.log('4');
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i ++) {
            yield this.values[i];
        }
    }
}
for (let value of obj) {
    console.log(value);
}
