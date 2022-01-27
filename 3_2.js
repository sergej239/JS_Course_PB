function forEach(arr, callback) {
    if (arguments.length==2 && Array.isArray(arr) && typeof callback === 'function') {
        for(let i=0; i<arr.length; i++) {
            if (i in arr) {
                callback(arr[i], i, arr);
            }
        }
    } else {
        throw new Error('Error in arguments');
    }
}

const arr = [1,2,3,4,5];

forEach(arr, function (item, i, arr) { //вызов функции
     console.log(item, i, arr);
})
