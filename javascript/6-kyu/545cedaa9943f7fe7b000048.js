function isPangram(string){
  let letters = [];
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++){
    let letter = string[i];
    if (!letters.includes(letter) && (letter <= 'z' && letter >= 'a')){
      letters.push(letter);
    }
  } return letters.length === 26;
}
