function stringClean(s){
  let numbers = "0123456789";
  let cleanedString = "";
  for (let i = 0; i < s.length; i++) {
    if (!numbers.includes(s[i])){
      cleanedString += s[i];
    }
  } return cleanedString;
}
