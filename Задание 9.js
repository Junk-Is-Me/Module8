function getElementsArray(array) {
    let countEven = 0; 
    let countOdd = 0;
    let countOther = 0;
    
    for (let i = 0; i < array.length; i++) {
      if ((array[i] === 0) || (typeof (array[i]) != 'number')) {
        countOther++;
      } else {
        if (array[i] % 2 === 0) {
          countEven++;
        } else {
          countOdd++;
        }
      }
    }
    console.log('Четных = ', countEven, 'нечетных = ', countOdd, 'остальные = ', countOther);
}


let arr = [2, 4, 6, 'test', null];
getElementsArray(arr);