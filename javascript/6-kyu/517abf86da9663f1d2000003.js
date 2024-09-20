function toCamelCase(str){
  if (str === ""){
    return str;
  }
  
  str = str.replaceAll('_', ' ');
  str = str.replaceAll('-', ' ');
  str = str.split(" ");
  
  let camelCase = str[0];
  for (let i = 1; i < str.length; i++){
    let word = str[i];
    camelCase += word.slice(0, 1).toUpperCase() + word.slice(1);
  } 
  
  return camelCase;
}
