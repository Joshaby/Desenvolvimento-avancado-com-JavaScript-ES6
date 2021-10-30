class Math {

    sum(a, b) {
        return a + b;
    }

    sum1(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 1000);
    }

    multiply(a, b) {
        return a * b;
    }
    
}

module.exports = Math;