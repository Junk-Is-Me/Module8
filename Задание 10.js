let numb = prompt('');
function prime (j) {
  if(numb >= 1000) return false;
  if (j< 2) return true;
  if (j === 2) return false;
  for(let i = 3; i * i <= numb; i+2) 
  return !(j % i) ? true : false;
}
alert(prime(number))
