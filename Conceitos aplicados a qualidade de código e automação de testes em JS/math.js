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

    printSum(req, res, a, b) {
        // console.log(res.load('index', a + b));
        res.load('index', a + b);
    }
}

module.exports = Math;