// Сортировка массива по возрастанию методом "пузырька"
let arr=[6,5,4,3,2,1];
for (let i=0; i<arr.length-1; i++) {
    for (let j=0; j<arr.length-i-1;j++) {
        if (arr[j]>arr[j+1]) {
            [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
        }
    }
}
// Вывод отсортированного массива 
for (let k=0; k<arr.length; k++) {
    console.log(arr[k]);
}
