function isEven(a) {
    if (typeof a === 'number') {
        if (a % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        throw new Error('parameter type is not a Number');
    }
}
isEven(3);// false
isEven(4);// True
