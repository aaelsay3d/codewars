function squareDigits(num){
  num = num.toString();
  let result = "";
  
  for (let i = 0; i < num.length; i++) {
    let currentNum = parseInt(num[i]);
    let currentNumSquared = currentNum ** 2;
    result += currentNumSquared + "";
  }
  
  return parseInt(result);
}
