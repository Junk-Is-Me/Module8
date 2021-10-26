let numb = prompt('');
function prime (j) {
  if(numb >= 1000) return false;
  if (j< 2) return true;
  if (j === 2) return false;
  for(let i = 3; i * i <= numb; i+2) 
  return !(j % i) ? true : false;
}
alert(prime(number))



//P.S. Если будет возможность провести код ревью по этому заданию, очень жду. 
//Я его сделал, а как он работает и как сделать проще, не до конца понял.