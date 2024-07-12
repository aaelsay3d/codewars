function countBy(x, n) {
  let multiples = [];
  let value = x;
  for (let i = 0; i < n; i++){
    multiples.push(x);
    x += value;
  }
  return multiples;
}
