function sameCase(a, b){
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }
  if (isLower(a) && isUpper(b) || isLower(b) && isUpper(a)){
    return 0;
  } return 1;
}

function isLetter(c) {
  c = c.toLowerCase();
  return c >= 'a' && c <= 'z';
}

function isLower(c) {
  return c >= 'a' && c <= 'z';
}

function isUpper(c) {
  return c >= 'A' && c <= 'Z';
}
