function f(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            throw new Error('parameter can not be an empty')
        } else {
            console.log(arr.splice(0,1)) 
            if (arr.length !=0) {
                    f(arr);
                }
        }
    } else {
        throw new Error('parameter type should be an array')
    }
}
f([1,2,3]);
