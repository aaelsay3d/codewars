function narcissistic(value) {
  let valueAsString = value.toString();
  let power = valueAsString.length;
  let sumOfDigitsRaisedToPow = 0;
  
  for (let i = 0; i < valueAsString.length; i++){
    let digit = Number(valueAsString[i]);
    sumOfDigitsRaisedToPow += digit ** power;
  } 
  
  return sumOfDigitsRaisedToPow === value;
}
