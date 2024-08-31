function sumStr(a,b) {
  if (a === ""){
    a = 0;
  }
  if (b === ""){
    b = 0;
  }
  let sum = parseInt(a) + parseInt(b);
  return sum.toString();
}
