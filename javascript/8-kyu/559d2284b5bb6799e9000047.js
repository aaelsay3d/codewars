function addLength(str) {
  str = str.split(" ");
  let words = [];
  for (let i = 0 ; i < str.length; i++){
    words.push(`${str[i]} ${str[i].length}`);
  } return words;
}
