var arr=[1, 2, -4, 3, -9, -1, 7], arrNew=[];
function isPositive(a) {
    if (typeof a === 'number' && a > 0) {
        return true;
    } else if (typeof a === 'number' && a < 0) {
        return false;
    } else {
        throw new Error('parameter type is not a Number')
    }
}
for (let i=0; i<arr.length; i++) {
    if (isPositive(arr[i])) {
        arrNew.push(arr[i]);    //Добавление нового элемента в конец массива
    }
}
// Вывод на экран нового массива
for (let i=0; i<arrNew.length; i++) {
    console.log(arrNew[i]);
}
