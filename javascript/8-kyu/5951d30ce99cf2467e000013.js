function isPythagoreanTriple(integers) {
  let first = integers[0] ** 2, second = integers[1] ** 2, third = integers[2] ** 2;
  let firstExpression = first + second === third;
  let secondExpression = first + third === second;
  let thirdExpression = second + third === first;
  
  return firstExpression || secondExpression || thirdExpression;
}
