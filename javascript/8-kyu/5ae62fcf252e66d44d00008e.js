function expressionMatter(a, b, c) {
  let e1 = a * (b + c);
  let e2 = a * b * c;
  let e3 = a + b * c;
  let e4 = (a + b) * c;
  let e5 = a + b + c;
  return Math.max(e1, e2, e3, e4, e5);
}
