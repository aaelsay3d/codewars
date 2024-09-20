function contamination(text, char){
  if (text === ""){
    return text;
  } 
  
  let length = text.length;
  let contaminatedString = "";
  for (let i = 0; i < length; i++){
    contaminatedString += char;
  } return contaminatedString;
}
