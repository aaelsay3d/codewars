function duplicateEncode(word){
  let charCounter = {};
  word = word.toLowerCase();
  
  for (let char of word.split("")){
    if (char in charCounter){
      charCounter[char]++;
    } else {
      charCounter[char] = 1;
    }
  }
  
  let encodedText = "";
  for (let i = 0; i < word.length; i++){
    let char = word[i];
    if (charCounter[char] === 1){
      encodedText += "(";
    } else {
      encodedText += ")";
    }
  }
  
  return encodedText;
}
