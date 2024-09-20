function duplicateCount(text){
  text = text.toLowerCase();
  let chars = {};
  let count = 0;
  for (let i = 0; i < text.length; i++){
    let char = text[i];
    if (char in chars){
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  } for (let char in chars){
    if (chars[char] > 1){
      count++;
    }
  } return count;
}
