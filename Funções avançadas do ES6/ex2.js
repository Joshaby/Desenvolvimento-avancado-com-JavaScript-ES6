var prop = 'prop';
var func = function() {
    console.log('test');
};
var obj = {
    prop: prop,
    func,
    sum(a, b) {
        return a + b;
    }
};
console.log('1', obj);
console.log(obj.sum(1, 2));

var tu = 'tu';
var test = {
    [tu + 'concat']: tu
};
test['oi'] = 'oi';
console.log('2', test);