function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an Array')
    }
    let sum = 0;
    while (arr.length !==0) {
        var cur = arr.shift();
        if (typeof cur !== 'number' && !Array.isArray(cur)) {
            throw new Error('Was found neither a number nor an array');
        }
        if (Array.isArray(cur)) {
            arr.unshift(...cur);
            continue;
        }

    sum += cur;
    }
    return sum;
}

const arr=[[[1,2],[1,2]],[[2,1],[1,2]]];
let result=f(arr);
console.log(result);
