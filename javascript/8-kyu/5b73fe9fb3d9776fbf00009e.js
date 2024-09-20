function sumOfDifferences(arr) {
  arr = arr.sort(function(a, b) {return b - a});
  let sum = 0;
  for (let i = 1; i < arr.length; i++){
    sum += Math.abs(arr[i] - arr[i - 1]);
  } return sum;
}
