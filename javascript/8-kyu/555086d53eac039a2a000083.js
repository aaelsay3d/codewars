function lovefunc(flower1, flower2){
  let f1IsEven = flower1 % 2 === 0;
  let f2IsEven = flower2 % 2 === 0;
  return f1IsEven && !f2IsEven || !f1IsEven && f2IsEven;
}
