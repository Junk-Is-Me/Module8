let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (let i = 0; i <= arr.length; i++){
    if(i % 2 == 0){
        console.log(arr[i])
    }
}
console.log('это нечетные');

for(let j = 0; j<= arr.length; j++){
    if (j % 2 == 1){
        console.log(arr[j])
    }
}
console.log('эт четные');
