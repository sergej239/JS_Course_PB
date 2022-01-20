var f = function(a) {
    if (typeof a === 'number') {
        return rezult=a*a*a;
        } else {
            throw new Error('parameter type is not a Number');
        }
};
var result=f(3);
console.log(result);
var result1=f('String');
console.log(result1);
