function lowercaseCount(str){
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (lowerCaseLetters.includes(str[i])){
      counter++;
    }
  } return counter;
}
