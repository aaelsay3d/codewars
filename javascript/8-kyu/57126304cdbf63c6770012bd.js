function isDigit(s) {
  s = s.trim();
  return !isNaN(Number(s)) && s !== "";
}
