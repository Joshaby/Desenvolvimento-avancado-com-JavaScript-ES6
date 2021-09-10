const sum = (...numbers) => {
    let sumNumbers = 0;
    numbers.forEach(value => sumNumbers += value);
    return sumNumbers;
}
console.log('1', sum(1, 2, 3, 4));

const arr = [1, 2, 3, 4];
console.log('2', arr.reduce((sum, value) => sum += value, 0));

const create = (a, b) => ({nome: a, sobrenome: b});
console.log('3', create("José", "Henrique"));

console.log('4');
var obj = {
    showContext: function showContext() {
        var _this = this;
        this.log('test');
        console.log(this);
        setTimeout(function() {
            console.log(this);
            this.log('test');
            _this.log('test');
        }.bind(this), 1000)
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();

console.log('5');
var obj = {
    showContext: function showContext() {
        this.log('test');
        console.log(this);
        setTimeout(() => {
            console.log(this);
            this.log('test');
        }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();