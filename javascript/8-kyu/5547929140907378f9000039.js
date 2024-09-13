function shortcut (string) {
  let vowels = "aeiou";
  let newString = "";
  for (let i = 0; i < string.length; i++){
    if (!vowels.includes(string[i])){
      newString += string[i];
    }
  }
  return newString;
}
