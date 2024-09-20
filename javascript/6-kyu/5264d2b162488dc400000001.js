function spinWords(string){
  let newString = "";
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    if (word.length >= 5){
      newString += reverseWord(word);
    }  
    if (word.length < 5) {
      newString += word;
    }
    if (i !== words.length - 1){
      newString += " ";
    }
  }
  return newString;
}

function reverseWord(word){
  return word.split("").reverse().join("");
}
