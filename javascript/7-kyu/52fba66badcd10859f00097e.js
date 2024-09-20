function disemvowel(str) {
  let vowels = "aeiou";
  let newString = "";
  
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (vowels.indexOf(letter.toLowerCase()) === -1){
      newString += letter;
    }
  }
  return newString;
}
