var f = function(a,b,c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('all parameters type should be a Number');
        } else {
            return result=(a-b)/c;
        }
};
var result=f(9,3,2);
console.log(result);
var result1=f('s',9,3);
console.log(result1);
