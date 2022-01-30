function arrayFill(par1, par2) {
    if (arguments.length == 2) {
        if (typeof par2 !== 'number') {
            throw new Error('par2 must be number');
        }
        if (typeof par1 !== 'number' && typeof par1 !== 'string' && typeof par1 != 'object' && !Array.isArray(par1)) {
            throw new Error('parameter1 must be a Number, String, Array, Object');
        }
        for (let i=0; i<par2; i++ ) {
            arr.push(par1);
        }
    } else {
        throw new Error('Error in arguments');
    }

}
let arr=[];
arrayFill('x', 5);
console.log(arr);
