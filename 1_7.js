let arr=[1,2,3,4], sum=0; 
for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum=sum+arr[i];
    }
}
console.log(sum)
