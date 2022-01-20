var f=function(a) {
    if (typeof a === 'number') {
        switch (a) {
            case 1:
                return 'Воскресенье';
                break;
            case 2:
                return 'Понедельник';
                break;
            case 3:
                return 'Вторник';
                break;
            case 4:
                return 'Среда';
                break;
            case 5:
                return 'Четверг';
                break;
            case 6:
                return 'Пятница';
                break;
            case 7:
                return 'Суббота';
                break;
            default:
                throw new Error('parameter should be in the range of 1 to 7')
        }
    } else {
        throw new Error('parameter type is not a Number')
    }
}
result = f(1);
console.log(result);
