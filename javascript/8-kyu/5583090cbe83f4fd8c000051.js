function digitize(n) {
  if (n === 0){
    return [0];
  }
  
  let numArray = [];
  while (n > 0){
    numArray.push(n % 10);
    n = Math.floor(n / 10);
  }
  return numArray;
}
