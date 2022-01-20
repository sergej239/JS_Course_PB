function getDivisors(a) {
    let arr=[];
    if (typeof a === 'number') {
        if (a !== 0) {
            for (let i=1; i<=a; i++) {
                if (a % i === 0) {
                    arr.push(i);
                }
            }
            return arr;
        } else {
            throw new Error('parameter can not be a 0');
        }
    } else {
        throw new Error('parameter type is not a Number')
    }
}
getDivisors(12); // [1, 2, 3, 4, 6, 12]
