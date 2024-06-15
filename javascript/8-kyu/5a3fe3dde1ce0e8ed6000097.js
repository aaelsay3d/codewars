function century(year) {
  let century = Math.floor(year / 100);
  year /= 100;
  if (year > century){
    return century + 1;
  } return century;
}
