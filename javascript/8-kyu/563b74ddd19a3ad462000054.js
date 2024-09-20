function stringy(size) {
  let stringyString = "";
  for (let i = 0; i < size; i++){
    if (i % 2 === 0){
      stringyString += '1';
    } else {
      stringyString += '0';
    }
  } return stringyString;
}
