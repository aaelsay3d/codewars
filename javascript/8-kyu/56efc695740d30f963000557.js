String.prototype.toAlternatingCase = function () {
  let newString = "";
  for (let i = 0; i < this.length; i++){
    let char = this.slice(i, i + 1);
    if (char === char.toUpperCase()){
      newString += char.toLowerCase();
    } else {
      newString += char.toUpperCase();
    }
  }
  return newString;
}
