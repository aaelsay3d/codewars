function remove(s,n){
  let newStr = "";
  for (let i = 0; i < s.length; i++){
    if (s[i] === "!" && n > 0){
      n--;
    } else {
      if (s[i] === "!" && n === 0){
        newStr += s[i];
      } else {
        newStr += s[i];
      }
    }
  } return newStr;
}
