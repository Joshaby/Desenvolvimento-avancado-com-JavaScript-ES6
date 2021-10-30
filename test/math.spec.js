const assert = require('assert');
const Math = require('../Conceitos aplicados a qualidade de código e automação de testes em JS/math.js')

let value = 0;

describe('Math class', function() {

    beforeEach(function() {
        value = 5;
    });

    it('Sum two numbers', function() {
        const math = new Math();

        assert.equal(math.sum(5, value), 10);
    });

    it('Sum two numbers with sum1 function', function(done) {
        const math = new Math();

        math.sum1(5, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });

    it('Multiply two number', function() {
        const math = new Math();

        value = 6

        assert.equal(math.multiply(5, value), 30);
    });

});