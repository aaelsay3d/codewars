function arrayMadness(a, b) {
  let sumOfSquares = 0;
  let sumOfCubes = 0;
  
  for (let i = 0; i < a.length; i++){
    sumOfSquares += a[i] ** 2;
  }
  
  for (let i = 0; i < b.length; i++){
    sumOfCubes += b[i] ** 3;
  }
  return sumOfSquares > sumOfCubes;
}
