var f=function(){
    let result=0;
    for (item of arguments) {
        if (typeof item === 'number') {
            result=result+item;
            } else {
                throw new Error('all parameters type should be a Number');
            }
    }
    return result;
}
var result=f(1,1,1);
console.log(result);
