const assert = require('assert');
const Math = require('../Conceitos aplicados a qualidade de código e automação de testes em JS/math.js');
const expect = require('chai').expect;

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

        expect(math.sum(5, 5)).to.equal(10);
    });

    it('Sum two numbers with chai', function() {
        const math = new Math();

        assert.equal(math.sum(5, value), 10);
    });

    it('Sum two numbers with sum1 function and chai', function(done) {
        const math = new Math();

        math.sum1(5, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two number and chai', function() {
        const math = new Math();
        // const obj = {
        //     name: 'José Henrique'
        // }

        // const obj1 = {
        //     name: 'José Henrique'
        // }

        // value = 6

        // expect(obj).to.have.property('name').equal('José Henrique');
        // expect(obj).to.deep.equal(obj1);
        expect(math.multiply(5, value)).to.equal(30);
    });

});