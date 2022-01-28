function filter(arr, callback) {
    let rez=[];
    if (arguments.length==2 && Array.isArray(arr) && typeof callback === 'function') {
        for(let i=0; i<arr.length; i++) {
            if (i in arr) { // Проверка на не пустой элемент массива
                if (callback(arr[i], i, arr)) {
                    rez.push(arr[i])
                }
            }
        }
    } else {
        throw new Error('Error in arguments');
    }
return rez;
}

const arr = [1,2,3,4,5];

let f=filter(arr, function (item,i,arr) { //вызов функции
     return item>3;
})
console.log(f);
