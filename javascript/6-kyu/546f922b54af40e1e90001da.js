function alphabetPosition(text) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase()
  let positions = [];
  for (let i = 0; i < text.length; i++){
    if (alphabets.includes(text[i])){
      positions.push(alphabets.indexOf(text[i]) + 1);
    }
  } return positions.join(" ");
}
