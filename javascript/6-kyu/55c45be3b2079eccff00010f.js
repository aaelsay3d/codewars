function order(words){
  words = words.split(" ");
  let orders = {};
  
  for (let i = 0; i < words.length; i++){
    let word = words[i];
    for (let j = 0; j < word.length; j++){
      let char = word[j];
      if (char >= 1 && char <= 9){
        orders[char] = word;
      }
    }
  }
  
  let newString = [];
  
  for (let i = 1; i <= words.length; i++){
    newString.push(orders[i])
  } return newString.join(" ");
}
