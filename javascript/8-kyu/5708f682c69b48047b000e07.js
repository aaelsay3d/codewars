function multiply(number){
  let pow = Math.abs(number).toString().length;
  return number * (5 ** pow);
}
