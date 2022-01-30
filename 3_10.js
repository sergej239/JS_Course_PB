function reverse(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            throw new Error('Array can\'t be []');   
        }
        let a=[],i, length=arr.length;
        for (i=0; i<length; i++ ) {
            a[i]=arr[(arr.length-1)-i];
        }
        for (i=0; i<length; i++) {
            arr[i]=a[i];
        }
    return arr;
    } else {
        throw new Error('parameter type is not an array ')
    }
}
const arr=[3,2,1];
console.log(reverse(arr));
