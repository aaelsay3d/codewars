function doubleChar(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < 2; j++){
      newString += str[i];
    }
  }
  return newString;
}
