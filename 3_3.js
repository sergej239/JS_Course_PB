function every(arr, callback) {
    if (arguments.length==2 && Array.isArray(arr) && typeof callback === 'function') {
        for(let i=0; i<arr.length; i++) {
            if (i in arr) { // Проверка на не пустой элемент массива
                if (!callback(arr[i], i, arr)) {
                    return false;
                }
            }
        }
    } else {
        throw new Error('Error in arguments');
    }
return true;
}

const arr = [1,2,3,4,5];

let f=every(arr, function (item,i,arr) { //вызов функции
     return item>3;
})
console.log(f);
