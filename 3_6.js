function reduceRight(arr, callback, startValue) {
    let result=startValue, length=arr.length;
    if (typeof startValue === 'number' || typeof startValue === 'string') {
        if (arguments.length==3 && Array.isArray(arr) && typeof callback === 'function') {
            for(let i=length; i>=0; i--) {
                if (i in arr) { // Проверка на не пустой элемент массива
                    result=callback(result, arr[i], i, arr);
                }
            }
        } else {
            throw new Error('Error in arguments');
        }
    } else {
        throw new Error('Acc must be number or string');
    }    
return result;
}

const arr = [1,2,3,4,5];
const acc=0;
let f=reduceRight(arr, function (acc,item,i,arr) { //вызов функции
    console.log(acc); 
    return acc+item;
}, acc)
console.log(f);
