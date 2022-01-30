function map(arr, callback) {
    let length=arr.length, results=[];
    if (arguments.length==2 && Array.isArray(arr) && typeof callback === 'function') {
        for(let i=0; i<arr.length; i++) {
            if (i in arr) {
                results.push(callback(arr[i], i, arr));
            }
        }
    } else {
        throw new Error('Error in arguments');
    }
    return results;
}

var arr = ['abcd','abcde','ab','abc'];
var arrLength=[];
map(arr, function (item, i, arr) { //вызов функции
     arrLength[i]=arr[i].length;
})
console.log(arrLength);
