function remove (string) {  
  string = string.split("").reverse();
  let index = null;
  for (let i = 0; i < string.length; i++){
    if (string[i] === "!"){
      continue;
    } else {
      index = i;
      break;
    }
  } 
  string = string.reverse().join("");
  if (index){
    return string.slice(0, string.length - index);
  } return string;
}
