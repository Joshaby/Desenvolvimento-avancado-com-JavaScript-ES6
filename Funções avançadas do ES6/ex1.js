function randomNumber() {
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    //b = b || 1;
    //b = typeof b === undefined ? 1 : b;
    return a * b;
}

console.log('1', multiply(4));