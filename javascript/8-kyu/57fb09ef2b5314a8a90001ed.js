function replace(s){
  let vowels = "aeiouAEIOU";
  let newString = "";
  for (let i = 0; i < s.length; i++){
    if (vowels.includes(s[i])){
      newString += '!';
    } else {
      newString += s[i];
    } 
  } return newString;
}
