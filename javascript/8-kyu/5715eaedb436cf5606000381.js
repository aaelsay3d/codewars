function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    let num = arr[i];
    if (num > 0){
      sum += num;
    }
  } return sum;
}
