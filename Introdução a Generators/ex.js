// Symbols
const uniqueId = Symbol('Hello');
const uniqueId1 = Symbol('Hello');
console.log('1', uniqueId === uniqueId1);

const obj = {
    [uniqueId]: 'Hello',
}
console.log('2', obj);

console.log('3', Object.keys(obj));

console.log('4', Object.getOwnPropertySymbols(obj));

// Well Known Symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const iterator = arr[Symbol.iterator]();
console.log('5', iterator);
console.log(iterator.next());

console.log('6');
for (let value of arr) {
    console.log('\t', value);
}

console.log('7');
const arr1 = arr.values();
console.log(arr1.next())

const obj1 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i ++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}
const it2 = obj1[Symbol.iterator]();
console.log('8');
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

console.log('9');
for (let value of obj1) {
    console.log(value);
}

const arr2 = [...obj1];
console.log('10', arr2);